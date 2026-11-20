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
    if (!file) {
        return;
    }

    pdfFile = file;

    displayPDF(file); 
});

summarizeBtn.addEventListener('click', async () => {
    const text = await extractText(pdfFile);

    try{
        summaryDiv.textContent = 'Loading...';

        const summary = await getSummary(text);
    
        summaryDiv.textContent = summary;
    }
    catch (error) {
        summaryDiv.textContent = error.message;
    }

    clearBtn.style.display = 'inline-block';
    summarizeBtn.style.display = 'none';
})

clearBtn.addEventListener('click', () => {
    input.value = '';

    clearPDF();

    summarizeBtn.style.display = 'inline-block';
    clearBtn.style.display = 'none';
    summaryDiv.textContent = 'No content yet'
});