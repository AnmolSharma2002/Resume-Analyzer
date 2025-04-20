import pandas as pd
from datasets import load_dataset

#Loading the dataset
dataset = load_dataset("ccdv/arxiv-classification")

#Convert in pnadas data frame
df = pd.DataFrame(dataset["train"])

print("Database preview")
print(df.head())

non_resume_df = df[['text']].dropna(subset=['text'])

non_resume_df['label'] = 0

output_file = "processed_non_resumeArxiv.csv"
non_resume_df.to_csv(output_file, index=False)
print(f"Processed BBC News data saved as '{output_file}'")