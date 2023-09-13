import { PostModel } from "../models/Post.js"


//CONTROLADOR PARA TRAER TODAS LAS TAREAS
export const ctrlGetPost = async(req, res) => {
    try {
        const post = await PostModel.findAll();              
        if (!post) return res.status(404)
        return res.status(200).json(post)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })
    }
}

//CONTROLADOR PARA CREAR UNA TAREA
export const ctrlCreatePost = async(req, res) => {
    try {
        const newPosts = await PostModel.create(req.body)
        return res.status(201).json(newPosts)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })
    }
}

//CONTROLADOR PARA MODIFICAR UNA TAREA
export const ctrlUpdatePost = async(req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)
        if(!post) {
            returnres.status(404).json({
                message: "Tarea no encontrada"
            })
        }
        post.update(req.body)
        return res.status(200).json(post)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })
    }
}

//CONTROLADOR PARA ELIMINAR UNA TAREA
export const ctrlDeletePost = async(req, res) => {
    const { id } = req.params
    try {
        const postDeletd = await PostModel.destroy({
            where: {
                id: id
            }
        })
        if(!postDeletd) {
            returnres.status(404).json({
                message: "Tarea no encontrada"
            })
        }
        return res.status(200).json({
            message: "Tarea eliminada"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })
    }
}