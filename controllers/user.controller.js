import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        next({ message: error.message });
    }
};

// sign-in
export const login = async (req, res, next) => {
    try {
        const { email, pass } = req.body;
        // const email = req.body.email
        const user = await User.findOne({ email });
        if (!user) {
            return next({ message: 'user not found', status: 401 }); // Unauthorized - לא מאומת
        }

        // בדיקת הסיסמא שנשלחה עם הסיסמא המוצפנת
        const isAuth = await bcrypt.compare(pass, user.pass);
        if (!isAuth) {
            return next({ message: 'user not found', status: 401 }); // Unauthorized - לא מאומת
        }

        // user.password = '****'; // מחזיר כוכביות ללקוח
        // res.json(user);
        const token = generateToken(user);
        res.json({ name: user.name,id: user._id, token });
    } catch (error) {
        next({ message: error.message });
    }
};

// add
export const register = async (req, res, next) => {
    try {
        const { name, email, pass } = req.body;
        const user = new User({ name, email, pass });
        // TODO: hash the password - מתבצע אוטומטית לפני שמירה
        await user.save();

        // user.password = '****'; // מחזיר כוכביות ללקוח
        // res.json(user);
        const token = generateToken(user);
        res.json({ name: user.name, token });
    } catch (error) {
        next({ message: error.message });
    }
};

// update
export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, pass, email } = req.body;

        if (req.myUser._id !== id) {
            return next({ status: 403, message: `user ${req.myUser._id} cannot delete user ${id}` })
        }
        const user = await User.findByIdAndUpdate(id, {
            $set: { name, pass, email },
        }, { new: true });

        res.status(200).json(user);
    }
    catch (error) {
        next({ message: error.message });
    }
};

// delete
export const deleteUser = async (req, res, next) => {
    try {
        // req.myUser = { _id, role }
        const { id } = req.params;

        if (req.myUser._id !== id) {
            return next({ status: 403, message: `user ${req.myUser._id} cannot delete user ${id}` })
        }

        // await User.deleteOne({ _id: id });
        await User.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        next({ message: error.message });
    }
};