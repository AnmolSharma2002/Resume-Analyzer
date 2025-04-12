from fastapi import APIRouter, UploadFile, File
from app.services.isResume import is_resume
from app.utils.file_processing import extract_text_from_file  # You’ll create this if not done yet

router = APIRouter()

@router.post("/predict-resume")
async def predict_resume(file: UploadFile = File(...)):
    content = await file.read()
    text = extract_text_from_file(file.filename, content)
    result = is_resume(text)
    return {"is_resume": result}
