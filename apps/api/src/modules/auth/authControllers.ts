import { Request, Response } from 'express';
import { loginService, registerService } from './authServices';

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body;
  loginService({ email, password });
};

export const registerController = async (req: Request, res: Response) => {
  const { email, password, username, displayName, phone, bio, profilePicture } =
    req.body;
  if (!email || !password || !username) {
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
