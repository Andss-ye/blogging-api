import express from "express";
import { getPostsController, getPostIdController, createPostController, updatePostController, deletePostController } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPostsController);

router.get("/:id", getPostIdController);

router.post("/", createPostController);

router.put("/:id", updatePostController);

router.delete("/:id", deletePostController);

export default router;