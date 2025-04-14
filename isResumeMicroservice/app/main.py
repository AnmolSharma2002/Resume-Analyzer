from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routes import router as resume_router

import uvicorn

# Initialize FastAPI app
app = FastAPI(
    title="Resume Analyzer of a file",
    description="Detects if the file uploaded is a resume or not.",
    version="1.0.0",
)

# CORS Middleware to allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Root endpoint to check if the microservice is running
@app.get("/")
def read_root():
    return {"message": "Welcome to the Resume Analyzer API"}

# Register routes
app.include_router(resume_router, prefix="/analyze")

# Uvicorn entry point to run the app
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)