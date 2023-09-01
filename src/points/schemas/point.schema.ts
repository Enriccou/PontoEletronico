import * as mongoose from 'mongoose';

export const PointSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString()
    },
});