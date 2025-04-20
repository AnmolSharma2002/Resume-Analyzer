from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.isResume import is_resume_file

router = APIRouter()

@router.post("/predict-resume")
async def predict_resume(file: UploadFile = File(...)):
    try:
        # Read file content
        content = await file.read()

        # Use the is_resume_file function to get prediction details
        result = is_resume_file(content, file.filename)

        # Return the structured result directly
        return {
            "status": "success",
            "file_name": file.filename,
            "prediction": result["prediction"],
            "confidence": f"{result['confidence']}%",
            "heading_match": result["heading_match"]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
