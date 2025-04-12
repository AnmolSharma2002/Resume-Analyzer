import os
import pickle
from app.utils.file_processing import extract_text_from_file

# Load the model and vectorizer
model_path = "training/model/resume_classifier.pkl"
vectorizer_path = "training/model/tfidf_vectorizer.pkl"

# Load once when the service starts
with open(model_path, "rb") as f:
    model = pickle.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = pickle.load(f)

def is_resume_file(file_bytes: bytes, filename: str) -> bool:
    """
    Determines if the uploaded file is a resume.
    Returns True if it's a resume, else False.
    """
    try:
        # Extract text from uploaded file
        extracted_text = extract_text_from_file(filename, file_bytes)

        if not extracted_text.strip():
            raise ValueError("The file does not contain any extractable text.")

        # Vectorize the extracted text
        vectorized_text = vectorizer.transform([extracted_text])

        # Make prediction
        prediction = model.predict(vectorized_text)[0]

        return prediction == "resume"

    except Exception as e:
        raise RuntimeError(f"Error processing the file: {e}")
