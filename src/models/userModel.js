import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"]
    },
    status: {
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE'
    }
});

export const userModel = mongoose.model('usuarios', userSchema);