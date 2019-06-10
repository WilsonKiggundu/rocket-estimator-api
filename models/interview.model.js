import mongoose from 'mongoose'

export const Interview = mongoose.model(
    'Interview',
    mongoose.Schema({
        serialno: {
            type: String,
            required: true
        },

        candidate: {
            type: String,
            required: true
        },

        interviewee: {
            type: String,
            required: true
        },

        scores: {
            C: {
                type: Number,
                required: true
            },
            L: {
                type: Number,
                required: true
            },
            D: {
                type: Number,
                required: true
            },
            G: {
                type: Number,
                required: true
            }
        }

    }, {
        timestamps: true,
    })
)