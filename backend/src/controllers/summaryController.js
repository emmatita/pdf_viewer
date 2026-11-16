import { generateSummary } from '../services/openaiService';

export async function summarize(req, res) {

    const { text } = req.body ?? {};

    // implement palidate incoming text
    // implement prevent excessively large requests

    try {
        const summary = await generateSummary(text);
    
        return res.status(200).json({ summary });
    }
    catch (error) {
        console.error("Summary generation failed:", error.message);

        return res.status(502).json({ errror: "Unable to generate the summary. Please try again." });
    }

}