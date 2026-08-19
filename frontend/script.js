const input = document.getElementById('pdfInput');
const frame = document.getElementById('pdfFrame');
const clearBtn = document.getElementById('clearBtn');
const fileNameLabel = document.getElementById('fileName');
const textPDF = document.getElementById('showPdfContent');

input.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await extractText(file);
    console.log(text);
    
    textPDF.textContent = text;

    fileNameLabel.textContent = file.name;

    const fileURL = URL.createObjectURL(file);
    frame.src = fileURL;
    frame.style.display = 'block';

    clearBtn.style.display = 'inline-block'; 
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    frame.src = '';
    frame.style.display = 'none';
    fileNameLabel.textContent = 'No file chosen';
    clearBtn.style.display = 'none';
    textPDF.textContent = 'No content yet'
});

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