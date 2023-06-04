import Post from "../models/post.js";
import {uploadImagen} from "../libs/cloudinari.js";

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const createPost = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;

        if (req.files.image) {
            const result =  await  uploadImagen(rq.file.image.temFilePath)
            console.log(result)
        }

        const nuevopost = new Post({ titulo, descripcion })

        await nuevopost.save()

        return res.json(nuevopost)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

};

export const actualizarPost = async (req, res) => {
    try {
        
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
       
        return res.send(post)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const eliminarPost = async (req, res) => {
    try {
        const postEliminar = await Post.findByIdAndDelete(req.params.id);
        if (!postEliminar) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getPostId = async (req, res) => {
    try {
        const PostId = await Post.findById(req.params.id)

        if (!PostId) return res.sendStatus(404);
        return res.json(PostId);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

};