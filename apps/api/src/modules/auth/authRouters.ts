import { Router } from 'express';
import { loginController, registerController } from './authControllers';

export const authRouter = Router();

authRouter.post('/login', loginController);

authRouter.post('/register', registerController);

authRouter.delete('/delete-account', (req, res) => {
  res.json({ message: 'Logout' });
});

authRouter.delete('/logout', (req, res) => {
  res.json({ message: 'Logout' });
});

authRouter.post('/forgot-password', (req, res) => {
  res.json({ message: 'Forgot Password' });
});

authRouter.post('/reset-password', (req, res) => {
  res.json({ message: 'Reset Password' });
});
