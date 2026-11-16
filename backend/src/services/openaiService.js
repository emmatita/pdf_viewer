
export async function generateSummary(text) {

    /* if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/responses', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-5.4-mini',
                input: `Summarize this document clearly and concisely:\n\n${text}`
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'OpenAI API error' });
        }

        const summary = data.output[0].content[0].text;

        res.json({ summary });

    } 
    catch (error) {
    res.status(500).json({ error: 'Failed to generate summary' });
    } */

    const summary = "";

    return summary;
}