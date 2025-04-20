import pandas as pd
from datasets import load_dataset

#Load randomText dataset
dataset = load_dataset("stanfordnlp/imdb")

#Convert them to pandas
df = pd.DataFrame(dataset['train'])

print("Database preview")
print(df.head())

non_resume_df = df[['text']].dropna(subset=['text'])
non_resume_df['label'] = 0

output_file = 'processed_non_resumeWikitext.csv'
non_resume_df.to_csv(output_file, index=False)

print(f"Processed Wiki Text data saved as '{output_file}'")