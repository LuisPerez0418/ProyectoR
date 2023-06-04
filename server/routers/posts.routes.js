import  {Router}  from "express";
import {getPost, createPost,actualizarPost,eliminarPost, getPostId,} from "../controllers/posts.controlles.js";

const router = Router();

router.get('/posts', getPost);
router.post('/posts',createPost);
router.put('/posts/:id', actualizarPost);
router.delete('/posts/:id',eliminarPost);
router.get('/posts/:id',getPostId);

export default router;