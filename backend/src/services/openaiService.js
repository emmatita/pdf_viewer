import AppError from "../utils/AppError.js";

export async function generateSummary(text) {

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        throw new AppError("OpenAI API key is not configured.", 500);
    }

    if (!text || !text.trim()) {
    throw new AppError("No text provided.", 400);
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
            }),
            signal: AbortSignal.timeout(30000)
        });

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenAI API error:", data.error?.message);
        throw new AppError("Failed to generate summary.", 502);
    }

    const summary = data.output
        ?.flatMap(item => item.content ?? [])
        .find(item => item.type === "output_text")
        ?.text;
    
    return summary;
}