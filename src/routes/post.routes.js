import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPost, ctrlUpdatePost } from "../controllers/post.controllers.js";
import { createPostSchema } from "../models/schemas/post.schema.js"
import { validator } from "../middlewares/validator.js";
import { PostModel } from "../models/Post.js";

const postRouter = Router();

postRouter.get('/api/posts', ctrlGetPost)

postRouter.post('/api/posts', ctrlCreatePost)

postRouter.put('/api/:id', ctrlUpdatePost)

postRouter.delete('/api/:id', ctrlDeletePost)

export { postRouter }
