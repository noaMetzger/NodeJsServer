import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    name: {type: String, required: true},
    pass: {type: String, required: true},
    book: {type: Schema.Types.ObjectId, ref: 'books'},
    email: {type: String, required: true, uniqe: true},
    role: {type: String, enum: ['admin', 'user'], default: 'user'},
});


export const generateToken = (user) => {
    const secretKey = process.env.JWT_SECRET || 'JWT_SECRET';
    const token = jwt.sign({ _id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    return token;
};

// save לפני הפעולה
// יקרה באופן אוטומטי
// this-חובה לשלוח פונקציה רגילה ולא חץ - כי משתמשים ב
userSchema.pre('save', async function () {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    
    const hash = await bcrypt.hash(this.pass, salt);
    
    // Store hash in your password DB
    this.pass = hash;    
})


export default model('users', userSchema);