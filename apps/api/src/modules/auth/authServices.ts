import { prisma } from '../../../lib/prisma';

export const loginService = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //   prisma.user.findUnique({
  //     where: {
  //       email: email,
  //     },
  //   });
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
    await prisma.user.create({
      data: {
        email: email,
        password: password,
        username: username,
        displayName: displayName,
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
