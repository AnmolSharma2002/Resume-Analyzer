from fastapi  import APIRouter, FastAPI, UploadFile, File, HTTPException
from app.services.isResume import is_resume_file

router = APIRouter()

@router.post("/is-resume")
async def is_resume_file(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No File uploaded")
    
    try:
        contents = await file.read()
        result = is_resume_file(contents, file.filename)
        return {"is_resume": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))