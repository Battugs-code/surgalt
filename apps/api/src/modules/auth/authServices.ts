import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const loginService = async ({
  password,
  username,
}: {
  password: string;
  username: string;
}) => {
  try {
    const AUTH_ERROR = 'Invalid credentials';

    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });

    const dummyHash = '$2b$10$EixVAnZ3u2.93K5c3oJIz.ue5qV3S94cM5hZ2s6ZqF1vjO8Nq1k06';

    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password ?? dummyHash
    );

    if (!user || !isPasswordValid) {
      throw new Error(AUTH_ERROR);
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '24h' }
    );

    return token;
  } catch (e) {
    throw new Error(`User login failed ${e}`);
  }
};

export const registerService = async ({
  email,
  password,
  username,
  displayName,
  phone,
  bio,
  profilePicture,
}: {
  email: string;
  password: string;
  username: string;
  displayName: string;
  phone?: string;
  bio?: string;
  profilePicture?: string;
}) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        displayName,
        phone: phone || '',
        bio: bio || '',
        profilePicture: profilePicture || '',
      },
    });
    return 'done';
  } catch (e) {
    throw new Error(`User registered failed ${e}`);
  }
};
