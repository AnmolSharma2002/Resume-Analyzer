from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.isResume import is_resume_file, contains_resume_headings

router = APIRouter()

@router.post("/predict-resume")
async def predict_resume(file: UploadFile = File(...)):
    try:
        # Read the file contents
        content = await file.read()
        
        # Extract text from the file using filename and content
        result = is_resume_file(content, file.filename)

        if not result:
            text = contains_resume_headings(file.filename, content)
            if contains_resume_headings(text):
                result = True
            else:
                return False       
        # Return the prediction result
        return {"predict_resume": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
