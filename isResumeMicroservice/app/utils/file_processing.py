import io
import PyPDF2
import docx

def extract_text_from_file(filename: str, file_bytes: bytes) -> str:
    """
    Detects file type based on extension and extracts text.
    Supports .pdf and .docx formats.
    """
    if filename.lower().endswith(".pdf"):
        return extract_text_from_pdf(file_bytes)
    elif filename.lower().endswith(".docx"):
        return extract_text_from_docx(file_bytes)
    else:
        raise ValueError("Unsupported file type. Only PDF and DOCX are supported.")

def extract_text_from_pdf(file_bytes: bytes) -> str:
    """
    Extracts text from a PDF file.
    """
    try:
        text = ""
        reader = PyPDF2.PdfReader(io.BytesIO(file_bytes))
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text
        return text.strip()
    except Exception as e:
        raise ValueError(f"Failed to read PDF: {e}")

def extract_text_from_docx(file_bytes: bytes) -> str:
    """
    Extracts text from a DOCX file.
    """
    try:
        doc = docx.Document(io.BytesIO(file_bytes))
        text = "\n".join([para.text for para in doc.paragraphs])
        return text.strip()
    except Exception as e:
        raise ValueError(f"Failed to read DOCX: {e}")
