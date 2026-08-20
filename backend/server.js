import cors from 'cors';
import express from 'express';

import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

// Server status check
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Starts server on port 3000
app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

// Receives text from front end and sends it back summarized by AI as a .json
app.post('/summarize', async (req, res) => {
    const { text } = req.body;

    if (!text) {
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
    }
});

