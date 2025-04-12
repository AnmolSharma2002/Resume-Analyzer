import pandas as pd

#Path to your databases

resume_csv = "training/data/updatedResume.csv"
non_resume_csv = "training/data/non_resume.csv"
all_dataset_csv = "training/data/all_resume.csv"

#Load the dataset
resumes = pd.read_csv(resume_csv)
non_resumes = pd.read_csv(non_resume_csv)

#Check if the resume dataset has proper col for resume and text else i would format it

if "label" not in resumes.columns:
    resumes["label"] = "resume"

#Combine both the dataset
combined = pd.concat([resumes, non_resumes], ignore_index=True)

#Shuffle the dataset
combined = combined.sample(frac = 1, random_state=42).reset_index(drop = True)

#Save the merged dataset into our output_csv
combined.to_csv(all_dataset_csv, index = False)

print(f"✅ Merged {len(resumes)} resumes and {len(non_resumes)} non-resumes into {all_dataset_csv}")