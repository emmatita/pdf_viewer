import express from 'express';
import { summarize } from '../controllers/summaryController';

const router = express.Router();

router.post("/summarize", summarize);

export default router;
