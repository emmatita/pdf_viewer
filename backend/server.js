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


