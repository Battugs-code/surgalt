import { Router } from 'express';

export const router = Router();

router.get('/profile', (req, res) => {
  res.json({ message: 'Profile' });
});

router.put('/profile-update', (req, res) => {
  res.json({ message: 'Profile' });
});

router.delete('/profile-delete', (req, res) => {
  res.json({ message: 'Profile' });
});
