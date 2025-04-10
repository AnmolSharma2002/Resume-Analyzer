from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Initialize FastAPI app
app = FastAPI(
    title ="Resume Analyzer of a file",
    description ="Detects if the file uploaded is a resume or not.",
    version ="1.0.0",
)

#Corss to allow frontend to access the backend

app.add_middleware(
    CORSMiddleware,
    alloq_origins=["*"], # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, PUT, DELETE)
    allow_headers=["*"], # Allows all headers
)

#Root endpoint to check if the microservice is running
@app.get("/")
def read_root():
    return {"message": "Welcome to the Resume Analyzer API"}

# Later we will import routes like:
# from routes.resume_detector import router as resume_router
# app.include_router(resume_router, prefix="/analyze")

# Uvocorn entry point to run the app
if __name__ == "__main__":
    uvicorn.run("main:app", host = "0.0.0.0", port = 8000, reload = True)
