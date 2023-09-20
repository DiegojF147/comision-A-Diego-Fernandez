import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const PostModel = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    poster: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.NOW
    }
    
}, {
    timestamps: true
})
