import dotenv from "dotenv";
dotenv.config({ path: 'src/config/.env' });

console.log(
    "OpenAI API key loaded:",
    Boolean(process.env.OPENAI_API_KEY)
);

import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})