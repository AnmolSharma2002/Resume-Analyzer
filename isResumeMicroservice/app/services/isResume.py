import os
import pickle
from app.utils.file_processing import extract_text_from_file

# Load model and vectorizer once
model_path = "training/model/resume_classifier.pkl"
vectorizer_path = "training/model/tfidf_vectorizer.pkl"

with open(model_path, "rb") as f:
    model = pickle.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = pickle.load(f)

# Optional: Heading-based heuristic
resume_headings = [
    "work experience", "education", "skills", "projects",
    "certifications", "languages", "experience", "academic qualifications"
]

def contains_resume_headings(text: str) -> bool:
    text = text.lower()
    match_count = sum(1 for heading in resume_headings if heading in text)
    return match_count >= 5

def is_resume_file(file_bytes: bytes, filename: str) -> dict:
    """
    Predicts whether the uploaded file is a resume.
    Returns a dictionary with prediction label and model confidence.
    """
    try:
        # 1. Extract text
        extracted_text = extract_text_from_file(filename, file_bytes)

        if not extracted_text.strip():
            raise ValueError("The file does not contain any extractable text.")

        # 2. Vectorize the text
        vectorized_text = vectorizer.transform([extracted_text])

        # 3. Make prediction (label)
        label = model.predict(vectorized_text)[0]

        # 4. Confidence score (probability for label 1 → resume)
        proba = model.predict_proba(vectorized_text)[0][1]  # confidence for class "1"

        # 5. Heading-based fallback (optional)
        heading_match = contains_resume_headings(extracted_text)

        # 6. Return results
        return {
            "prediction": "Resume" if label == 1 else "Non-Resume",
            "confidence": round(proba * 100, 2),  # in percentage
            "heading_match": heading_match
        }

    except Exception as e:
        raise RuntimeError(f"Error processing the file: {e}")
