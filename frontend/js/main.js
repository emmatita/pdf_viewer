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
    const summary = await getSummary(text);

    displayPDF(file);

    summaryDiv.textContent = summary;
    clearBtn.style.display = 'inline-block'; 
});

clearBtn.addEventListener('click', () => {
    input.value = '';

    clearPDF();

    clearBtn.style.display = 'none';
    summaryDiv.textContent = 'No content yet'
});