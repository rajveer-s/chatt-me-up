import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { openai } from '../index.js';

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
    try{

    }
    catch(err) {
        console.log("error", err);
        res.status(500).json({ error: err.message });
    }
});

export default router;