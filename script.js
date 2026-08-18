const input = document.getElementById('pdfInput');
const frame = document.getElementById('pdfFrame')

input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    frame.src = fileURL;
    frame.style.display = 'block';});