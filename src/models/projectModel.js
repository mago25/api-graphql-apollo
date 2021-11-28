import mongoose from "mongoose";
import { userModel } from "./userModel.js";

const { Schema } = mongoose;
const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        generalObjs: {
            type: String,
            required: true
        },
        specificObjs: {
            type: String,
            required: true
        },
        budget: {
            type: Number,
            required: true
        },
        startDate: {
            type: Date,
            required: true,
        },
        finishDate: {
            type: Date,
            required: true
        },
        leader_id: {
            type: Schema.Types.Number,
            required: true,
            ref: "usuarios"
        },
        status: {
            type: String,
            required: true,
            enum: ['INACTIVO', 'ACTIVO'],
            default: 'INACTIVO'
        },
        phase: {
            type: String,
            enum: ['NULO','INICIADO', 'EN DESARROLLO', 'TERMINADO'],
            default: 'NULO'
        }
    },
    {
        toJSON: { virtuals: true},
        toObject: { virtuals: true}
    }
);

export const projectModel = mongoose.model('proyectos', projectSchema);