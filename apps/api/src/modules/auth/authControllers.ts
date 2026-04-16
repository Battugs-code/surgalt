import { Request, Response } from 'express';
import { loginService, registerService } from './authServices';

export const loginController = async (req: Request, res: Response) => {
  const { password, username } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required' });
    return;
  }
  try {
    const token = await loginService({ password, username });
    res.json({ token });
  } catch (e: any) {
    res.status(401).json({ message: e.message });
  }
};

export const registerController = async (req: Request, res: Response) => {
  const { email, password, username, displayName, phone, bio, profilePicture } =
    req.body;
  if (!email || !password || !username || !displayName) {
    res.json({ message: 'All fields are required' });
    return;
  }
  try {
    await registerService({
      email,
      password,
      username,
      displayName,
      phone,
      bio,
      profilePicture,
    });
    res.json({ message: 'User registered successfully' });
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export const logoutController = (req: Request, res: Response) => {
  res.json({ message: 'Logout' });
};

export const forgotPasswordController = (req: Request, res: Response) => {
  res.json({ message: 'Forgot Password' });
};

export const resetPasswordController = (req: Request, res: Response) => {
  res.json({ message: 'Reset Password' });
};
