import pandas as pd
from datasets import load_dataset

dataset = load_dataset("dhruvvaidh/cover-letter-dataset-llama3")

df = pd.DataFrame(dataset['train'])
print("Dataset preview:")
print(df.head())

non_resume_df = df[df['Output'].notnull()].copy()
non_resume_df = non_resume_df[['Output']]
non_resume_df['label'] = 0
non_resume_df.rename({'Output':'text'}, inplace=True)
output_file = 'processed_non_resumeCoverLetter.csv'
non_resume_df.to_csv(output_file, index=False)
print(f"Processed BBC News data saved as '{output_file}'")
