import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        varchar: 45
    },
    email: {
        type: String,
        required: true,
        varchar: 45
    },
    password: {
        type: String,
        required: true,
        varchar: 45
    },
    AdminPermission: {
        type: Boolean,
        required: true,
    },
});