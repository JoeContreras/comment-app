import express from 'express';
import { createComment, deleteComment, getComment, getComments, updateComment } from '../controllers/commentController.js';

const router = express.Router();

router.get('/comment', getComments);
router.post('/comment', createComment);
router.delete('/comment/:id', deleteComment);
router.put('/comment/:id', updateComment);
router.get('/comment/:id', getComment);

export default router;