import os 
import pandas as pd
from PyPDF2 import PdfReader

#Path to non resume folder

not_resume_folder = "training/data/notResume"

#List to hold extracted data from page text and labels
data = []

#Loop through all pdf in the folder
for filename in os.listdir(not_resume_folder):
    if filename.endswith(".pdf"):
        filepath = os.path.join(not_resume_folder, filename)
        try:
            reader = PdfReader(filepath)
            for i , page in enumerate(reader.pages):
                text = page.extract_text()
                if text and text.strip():  #Ensure there is actual text
                    data.append({
                        "text": text.strip(),
                        "label":"not_resume"
                    })
        except Exception as e:
            print(f"Error reading the {filename}: {e}")

#Save to CSV file

output_path = "training/data/non_resume.csv"
df = pd.DataFrame(data)
df.to_csv(output_path, index=False)

print(f"Extracted {len(df)} non-resume sample into {output_path}")