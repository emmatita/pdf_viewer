import { generateSummary } from '../services/openaiService.js';

export async function summarize(req, res, next) {

    const { text } = req.body ?? {};

    if (typeof text !== "string" || !text.trim()) {
        return res.status(400).json({
            success: false,
            error: "Please provide valid text."
        });
    }

    if (text.length > 100000) {
        return res.status(413).json({
            success: false,
            error: "Document text is too long to summarize."
        });
    }

    try {
        const summary = await generateSummary(text);
    
        return res.status(200).json({ 
            success: true,
            summary 
        });
    }
    catch (error) {
        next(error);
    }

}