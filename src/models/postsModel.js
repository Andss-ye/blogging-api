import { loadDB, saveDB } from "../utils/db.js";

export const getAllPosts = async () => {
    const db = await loadDB();
    return db.posts;
}

export const getPostById = async (id) => {
    const db = await loadDB();
    return db.posts.find(post => post.id === id);
}

export const createPost = async (post) => {
    const db = await loadDB();
    const newPost = { id: db.posts.length + 1, ...post };
    db.posts.push(newPost);
    await saveDB(db);
    return newPost;
}

export const updatePost = async (id, post) => {
    const db = await loadDB();
    const index = db.posts.findIndex(post => post.id === id);
    db.posts[index] = { ...db.posts[index], ...post };
    await saveDB(db);
    return db.posts[index];
}

export const deletePost = async (id) => {
    const db = await loadDB();
    db.posts = db.posts.filter(post => post.id !== id);
    await saveDB(db);
    return true;
}