import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score

#Paths
data_path = "data/cleaned_shuffled_dataset.csv"
model_path = "training/model/resume_classifier.pkl"
vectorizer_path = "training/model/tfidf_vectorizer.pkl"

#for loading the Dataset
df = pd.read_csv(data_path)

#Check for nulls
df.dropna(subset=["text","label"], inplace=True)

#Features and lables
x = df["text"]
y = df["label"]

#Convert into TF-IDF features
vectorizer = TfidfVectorizer(
    stop_words="english",
    max_features=5000  # limit to top 5000 words
)
X_vectorized = vectorizer.fit_transform(x)

#Train/Test-Split
X_train, X_test, y_train, y_test = train_test_split(
    X_vectorized, y, test_size=0.2, random_state=42
)

#Train classifier
model = LogisticRegression()
model.fit(X_train, y_train)

#Evalutate
y_pred = model.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")

#Save the model and vectorizer
with open(model_path, "wb") as f:
    pickle.dump(model, f)
with open(vectorizer_path, "wb") as f:
    pickle.dump(vectorizer, f)

print(f" Model saved to: {model_path}")
print(f"Vectorizer saved to: {vectorizer_path}")
