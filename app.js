import express from 'express';
import { postRouter } from './src/routes/post.routes.js';
import { startDb } from './src/config/database.js';

const app = express();

app.use(express.json())

const port = 3000;

app.use('/', postRouter)


app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
    startDb()
})

