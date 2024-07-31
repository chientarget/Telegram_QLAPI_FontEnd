import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, IUser } from '../models/User';

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Người dùng đã tồn tại' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'Tạo tài khoản thành công !', userId: user.id });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        // console.log('Login request received:', { email, password });
        const user = await findUserByEmail(email);
        // console.log('User found:', user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);  // Use user.password instead of user.MatKhau
        // console.log('Password match:', isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
