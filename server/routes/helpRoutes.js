import express from 'express';
import { submitHelp, getHelpPosts, getSinglePost } from '../controllers/helpController.js';

const router = express.Router();

router.post('/submit', submitHelp);
router.get('/posts', getHelpPosts);
router.get('/posts/:id', getSinglePost);

export default router;
