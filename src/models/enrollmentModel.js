import mongoose from "mongoose";

const { Schema } = mongoose;
const enrollmentSchema = new Schema(
    {
        project_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "proyectos"
        },
        user_id: {
            type: Schema.Types.Number,
            required: true,
            unique: true,
            ref: "usuarios"
        },
        startDate: {
            type: Date,
            required: true,
        },
        finishDate: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['NULA', 'ACEPTADA', 'RECHAZADA'],
            default: 'NULA'
        }
    },
    {
        toJSON: { virtuals: true},
        toObject: { virtuals: true}
    }
);

export const enrollmentModel = mongoose.model('inscripciones', enrollmentSchema);