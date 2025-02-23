import { getAllPosts, getPostById, createPost, updatePost, deletePost } from "../models/postsModel.js";

export const getPostsController = async (req, res) => {
    const posts = await getAllPosts();
    if (posts.length === 0) {
        res.status(404).json({ message: "No hay posts" });
        return;
    } else {
        res.json(posts);
    }
}

export const getPostIdController = async (req, res) => {
    const post = await getPostById(req.params.id);
    if (!post) {
        res.status(404).json({ message: "Post no encontrado" });
        return;
    } else {
        res.json(post);
    }
}

export const createPostController = async (req, res) => {
    const newPost = await createPost(req.body);
    if (!newPost) {
        res.status(400).json({ message: "Error al crear el post" });
        return;
    } else {
        res.status(201).json({ message: "Post creado", data: newPost });
    }
}

export const updatePostController = async (req, res) => {
    const updatedPost = await updatePost(req.params.id, req.body);
    if (!updatedPost) {
        res.status(400).json({ message: "Error al actualizar el post" });
        return;
    } else {
        res.json({ message: `Post con id ${req.params.id} actualizado`, data: updatedPost });
    }
}

export const deletePostController = async (req, res) => {
    const deleted = await deletePost(req.params.id);
    if (!deleted) {
        res.status(400).json({ message: "Error al eliminar el post" });
        return;
    } else {
        res.json({ message: `Post con id ${req.params.id} eliminado` });
    }
}