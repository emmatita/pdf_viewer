const clearBtn = document.getElementById('clearBtn');
const fileNameLabel = document.getElementById('fileName');
const frame = document.getElementById('pdfFrame');
const input = document.getElementById('pdfInput');
const summaryDiv = document.getElementById('summaryOutput');

// is called everytime file changes
input.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await extractText(file);
    const summary = await getSummary(text);

    fileNameLabel.textContent = file.name;
    summaryDiv.textContent = summary;

    const fileURL = URL.createObjectURL(file);
    frame.src = fileURL;
    frame.style.display = 'block';

    clearBtn.style.display = 'inline-block'; 
});

// What happens when clear button is clicked (file is cleared)
clearBtn.addEventListener('click', () => {
    input.value = '';
    frame.src = '';
    frame.style.display = 'none';
    fileNameLabel.textContent = 'No file chosen';
    clearBtn.style.display = 'none';
    summaryDiv.textContent = 'No content yet'
});

// PDF text extraction function
async function extractText(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        fullText += pageText + '\n'; 
    }
    
    return fullText;
}

// function to get in touch with backend and get the summary
async function getSummary(text) {
    const response = await fetch('http://localhost:3000/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });

    const data = await response.json();

    if (!data.summary) {
        return 'Something went wrong generating the summary. Please try again.';
    }
    return data.summary;
}