# 📄 PDF Viewer — AI-powered PDF Summarizer

A web application that allows users to upload and
read PDF documents, extract their text content and
generate AI-powered summaries.

This project was developed to explore full-stack
web development, backend architecture and the
integration of external AI APIs.

## 🎯 Project Goals

- Build an interactive PDF reader.
- Extract text from PDF documents using PDF.js.
- Integrate an AI API to generate document summaries.
- Implement secure communication between frontend
  and backend.


## 🪼​ Features

- PDF document upload
- PDF rendering using PDF.js
- Text extraction
- AI-powered document summarization
- Backend API integration
- Server-side API key management

## 🖥️ Screenshots

### Initial Interface
<img width="2196" height="931" alt="image" src="https://github.com/user-attachments/assets/ce4586a5-8d2f-4007-9c2a-29526e5daa27" />

### PDF Reader
<img width="2196" height="1537" alt="image" src="https://github.com/user-attachments/assets/e0449100-b63a-456a-adaa-47b277b9df2a" />

### AI Summary
<img width="2199" height="979" alt="image" src="https://github.com/user-attachments/assets/3f957811-b075-461c-be1a-3e349127138f" />

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| HTML / CSS | User interface |
| JavaScript | Frontend logic |
| Node.js | Backend runtime |
| Express.js | API server |
| PDF.js | PDF rendering and text extraction |
| OpenAI API | AI-powered summarization |

## 🪸​ Architecture

<img width="369" height="698" alt="architecture_diagram-pdf-viewer" src="https://github.com/user-attachments/assets/379b773c-0d75-4cf8-abb5-b35fea8e66c3" />

## 🐙​ Getting Started

### Prerequisites

- Node.js
- npm
- An OpenAI API key

### Installation

1. Clone the repository:

   git clone https://github.com/emmatita/pdf_viewer.git

2. Navigate to the project directory:

   cd pdf_viewer/backend/

3. Install dependencies:

   npm install

4. Create a `.env` file:

   OPENAI_API_KEY=your_api_key

5. Start the application:

   npm start

## 🧠 Technical Challenges & Solutions

### Secure API Integration

**Challenge:**
Avoid exposing the OpenAI API key in frontend code.

**Solution:**
Implemented server-side API calls through an
Express backend, keeping credentials in environment
variables.

### PDF Text Extraction

**Challenge:**
Extract readable text from uploaded PDF documents.

**Solution:**
Used PDF.js to extract text content from PDF pages
before sending it to the backend for summarization.

