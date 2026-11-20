import { extractText } from './pdfExtractor.js';
import { getSummary } from './api.js';
import { displayPDF, clearPDF } from './pdfViewer.js';

const clearBtn = document.getElementById('clearBtn');
const summarizeBtn = document.getElementById('summarizeBtn');
const input = document.getElementById('pdfInput');
const summaryDiv = document.getElementById('summaryOutput');

let pdfFile;

input.addEventListener('change', async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    pdfFile = file;

    displayPDF(file); 

    summaryDiv.textContent = 'No content yet';
    clearBtn.style.display = 'inline-block';
    summarizeBtn.style.display = 'inline-block';
});

summarizeBtn.addEventListener('click', async () => {

    if (!pdfFile) {
        summaryDiv.textContent = 'Please select a PDF first.';
        return;
    }

    summarizeBtn.disabled = true;
    summaryDiv.textContent = 'Loading...';

    try{
        const text = await extractText(pdfFile);

        const summary = await getSummary(text);
    
        summaryDiv.textContent = summary;

        summarizeBtn.style.display = 'none';
    }
    catch (error) {
        console.error('Summarization error:', error);

        summaryDiv.textContent = error instanceof Error
            ? error.message
            : 'An unexpected error occurred.';
    }
    finally {
        summarizeBtn.disabled = false;
    }
})

clearBtn.addEventListener('click', () => {
    input.value = '';
    pdfFile = null;

    clearPDF();

    summarizeBtn.style.display = 'inline-block';
    clearBtn.style.display = 'none';
    
    summaryDiv.textContent = 'No content yet'
});