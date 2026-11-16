
export async function generateSummary(text) {

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        throw new Error("OpenAI API key is not configured.");
    }

    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-5.4-mini',
                input: `Summarize this document clearly and concisely:\n\n${text}`
            })
        });

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenAI API error:", data.error?.message);
        throw new Error("Failed to generate summary.");
    }

    const summary = data.output
        ?.flatMap(item => item.content ?? [])
        .find(item => item.type === "text_output")
        ?.text;

    if (!summary) {
        throw new Error("No summary was returned by OpenAI.");
    }
    
    return summary;
}