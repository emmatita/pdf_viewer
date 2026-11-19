import express from "express";
import cors from "cors";
import summaryRoutes from "./routes/summaryRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

app.use("/", summaryRoutes);

app.use(errorHandler);

export default app;