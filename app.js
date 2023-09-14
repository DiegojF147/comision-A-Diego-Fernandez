import express from 'express';

import { startDb } from './src/config/database.js';
import cors from 'cors'
import { postRouter } from './src/routes/post.routes.js';


const app = express();

//middlewares
app.use(express.json())
app.use(cors())

const port = 3000;

app.use('/', postRouter)


app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
    startDb()
})

