import { extractText } from './pdfExtractor.js';
import { getSummary } from './api.js';
import { displayPDF, clearPDF } from './pdfViewer.js';

const clearBtn = document.getElementById('clearBtn');
const input = document.getElementById('pdfInput');
const summaryDiv = document.getElementById('summaryOutput');

input.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await extractText(file);

    displayPDF(file);

    try{
        summaryDiv.textContent = 'Loading...';

        const summary = await getSummary(text);
    
        summaryDiv.textContent = summary;
    }
    catch (error) {
        summaryDiv.textContent = error.message;
    }

    clearBtn.style.display = 'inline-block'; 
});

clearBtn.addEventListener('click', () => {
    input.value = '';

    clearPDF();

    clearBtn.style.display = 'none';
    summaryDiv.textContent = 'No content yet'
});