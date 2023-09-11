import { body } from "express-validator";


export const createPostSchema = [
   body("title")
      .isString().withMessage("Debe ser un string")
      .notEmpty().withMessage("No debe estar vacio"),
   body("description")
      .isString().withMessage("Debe ser un string")
      .notEmpty().withMessage("No debe estar vacio"),
   body("poster")
      .isURL().withMessage("Debe ser un enlace")
      .notEmpty().withMessage("No debe estar vacio"),
]

export const editPostSchema = [
   body("title")
      .optional()  
      .isString().withMessage("Debe ser un string")
      .notEmpty().withMessage("No debe estar vacio"),
   body("description")
      .optional()
      .isString().withMessage("Debe ser un string")
      .notEmpty().withMessage("No debe estar vacio"),
   body("poster")
      .optional()
      .isURL().withMessage("Debe ser un enlace")
      .notEmpty().withMessage("No debe estar vacio"),
]