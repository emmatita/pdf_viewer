const fileNameLabel = document.getElementById('fileName');
const frame = document.getElementById('pdfFrame');

let fileURL = null;

export function displayPDF(file) {
    fileNameLabel.textContent = file.name;

    fileURL = URL.createObjectURL(file);
    frame.src = fileURL;
    frame.style.display = 'block';
}

export function clearPDF() {
    frame.src = '';
    frame.style.display = 'none';

    fileNameLabel.textContent = 'No file chosen';
    
    if (fileURL) {
        URL.revokeObjectURL(fileURL);
        fileURL = null;
    }
}