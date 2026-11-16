import { generateSummary } from '../services/openaiService';

export async function summarize(req, res) {

    const { text } = req.body ?? {};

    if (typeof text !== "string" || !text.trim()) {
        return res.status(400).json({
            error: "Please provide valid text."
        });
    }

    if (text.length > 100000) {
        return res.status(413).json({
            error: "Document text is too long to summarize."
        });
    }

    try {
        const summary = await generateSummary(text);
    
        return res.status(200).json({ summary });
    }
    catch (error) {
        console.error("Summary generation failed:", error.message);

        return res.status(502).json({ errror: "Unable to generate the summary. Please try again." });
    }

}