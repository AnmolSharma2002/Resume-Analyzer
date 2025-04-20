import pandas as pd
import os

folderPath = 'data/FinalDataSet'
output_file = 'cleaned_shuffled_dataset.csv'

all_dfs = []
for file in os.listdir(folderPath):
    if file.endswith('.csv'):
        file_path = os.path.join(folderPath, file)
        df = pd.read_csv(file_path)

        # Drop 'Output' column if it exists
        if 'Output' in df.columns:
            df = df.drop(columns=['Output'])
            print(f"'Output' column dropped from: {file}")

        all_dfs.append(df)
        print(f"Loaded: {file}")

# Combine and shuffle
combined_df = pd.concat(all_dfs, ignore_index=True)
shuffled_df = combined_df.sample(frac=1, random_state=42).reset_index(drop=True)

# Show sample
print("Shuffled dataset shape:", shuffled_df.shape)
print(shuffled_df.head())

# Save to new file
shuffled_df.to_csv(output_file, index=False)
print(f"Saved cleaned and shuffled dataset to: {output_file}")
