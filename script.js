const input = document.getElementById('pdfInput');
const frame = document.getElementById('pdfFrame');
const clearBtn = document.getElementById('clearBtn');
const fileNameLabel = document.getElementById('fileName');

input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    fileNameLabel.textContent = file.name;

    const fileURL = URL.createObjectURL(file);
    frame.src = fileURL;
    frame.style.display = 'block';

    clearBtn.style.display = 'inline-block'; });

clearBtn.addEventListener('click', () => {
    input.value = '';
    frame.src = '';
    frame.style.display = 'none';
    fileNameLabel.textContent = 'No file chosen';
    clearBtn.style.display = 'none'; });