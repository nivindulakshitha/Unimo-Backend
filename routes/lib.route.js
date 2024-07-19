import express from 'express'
import { enterLibrary, exitLibrary, viewTrafficStatus } from '../controllers/Lib.controller.js';

const router = express.Router();

router.post('/enter', enterLibrary);
router.post('/exit', exitLibrary);
router.get('/status', viewTrafficStatus);

export default router;