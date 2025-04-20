import pandas as pd
from datasets import load_dataset

# Load the BBC News dataset from Hugging Face
dataset = load_dataset("SetFit/bbc-news")

# Convert to pandas DataFrame 
df = pd.DataFrame(dataset["train"])

# Show first few rows to verify structure
print("Dataset preview:")
print(df.head())

# Extract 'text' column and drop rows with missing values
non_resume_df = df[['text']].dropna(subset=['text'])

# Add 'label' column with value 0
non_resume_df['label'] = 0

# Define the output CSV file name
output_file = "processed_non_resumeBBCNews.csv"

# Save to CSV
non_resume_df.to_csv(output_file, index=False)

# Confirmation with the file name
print(f"Processed BBC News data saved as '{output_file}'")
