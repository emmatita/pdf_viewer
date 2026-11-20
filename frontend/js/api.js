
export async function getSummary(text) {
    try {
        const response = await fetch('http://localhost:3000/summarize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
    
        const data = await response.json();
    
        if (!response.ok || !data.success) {
            throw new Error(data.error || "Unable to generate summary.");
        }
    
        if (!data.summary) {
            throw new Error("No summary was returned.");
        }
        
        return data.summary;
    }
    catch (error) {
        console.error("Summary request failed:", error)

        throw error;
    }
}