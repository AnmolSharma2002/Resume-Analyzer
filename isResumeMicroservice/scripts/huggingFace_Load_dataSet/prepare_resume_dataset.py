import pandas as pd
from datasets import load_dataset

#Load the dataset from hugging face


dataset = load_dataset("sid1877/Resume-dataset-2024")

#Converting to pandas dataframe

df = pd.DataFrame(dataset['train'])

#Show the first few rows to check if the data is correct
print("Dataset preview:")
print(df.head())

#Extraction
resume_df = df[df['Resume_test'].notnull()].copy()

#extract only resume_text naem col 
resume_df = resume_df[['Resume_test']]
resume_df['label'] = 1

#renaming before saving to remove any noise
resume_df.rename(columns={'Resume_test': 'text'}, inplace=True)

#Save to csv
resume_df.to_csv("processed_resume_dataset2.csv",index=False)

#Confirmation
print("Processed resume dataset saved as 'processed_resume_data2.csv'")
print(resume_df.head())