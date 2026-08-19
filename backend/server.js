import cors from 'cors';
import express from 'express';

import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

app.post('/summarize', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    res.json({summary : text});
});

