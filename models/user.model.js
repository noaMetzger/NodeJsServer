import { model, Schema } from "mongoose";

const userSchema = new Schema({
    id: String,
    name: Number,
    pass: String
});

export default model('users', userSchema);