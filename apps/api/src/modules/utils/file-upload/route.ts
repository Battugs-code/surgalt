import { Router } from 'express';
import { fileUploadController } from './controller';
import multer from 'multer';

const fileUploadRouter = Router();
const uploadMiddleWare = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  // fileFilter(req, file, cb) {
  //   console.log(file.mimetype, 'mimetype');
  //   const allowed = ['image/jpeg', 'image/png', 'image/webp'];
  //   if (allowed.includes(file.mimetype)) cb(null, true);
  //   else cb(new Error('Only JPEG, PNG, WEBP allowed'));
  // },
});

fileUploadRouter.post(
  '/',
  uploadMiddleWare.single('file'),
  fileUploadController
);

export default fileUploadRouter;
