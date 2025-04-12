import pandas as pd

# Paths
input_resume_csv = "training/data/resume.csv"
output_updated_csv = "training/data/updatedResume.csv"

# Load the resume dataset
df_resumes = pd.read_csv(input_resume_csv)

# Check the columns and data
print("Original Resume Data:")
print(df_resumes.head())

# Ensure 'Resume' column exists (check for correct column name)
if "Resume" not in df_resumes.columns:
    raise ValueError("The 'Resume' column is missing in the resume dataset!")

# Create a new 'text' column with the same content as 'Resume' column
df_resumes["text"] = df_resumes["Resume"]

# Add a 'label' column with value "resume"
df_resumes["label"] = "resume"

# Select only the relevant columns: 'text' and 'label'
df_updated = df_resumes[["text", "label"]]

# Save the new DataFrame to CSV
df_updated.to_csv(output_updated_csv, index=False)

print(f"✅ Updated resume data saved to: {output_updated_csv}")
