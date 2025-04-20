import pandas as pd
import os

folderPath = 'data/processedResume'

all_dfs = []

for file in os.listdir(folderPath):
    if file.endswith('.csv'):
        file_path = os.path.join(folderPath,file)
        df = pd.read_csv(file_path)
        all_dfs.append(df)
        print(f"Loaded: {file}")
combined_df = pd.concat(all_dfs, ignore_index=True)
print("Combined dataframe shape:", combined_df.shape)
print(combined_df.head())
combined_df.to_csv('Resume.csv',index=False)