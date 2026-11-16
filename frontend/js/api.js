
export async function getSummary(text) {
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