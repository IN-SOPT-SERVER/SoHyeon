import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

//* 유저 정보 생성
const createUser = async (name: string, email: string, age: number) => {
  const data = await prisma.user.create({
    data: {
      userName: name,
      age,
      email
    }
  });

  return data;
}

//* 유저 정보 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();

  return data;
}

//* 유저 정보 수정
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      userName: name
    }
  });

  return data;
}

//* 유저 정보 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId
    }
  });
}


const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userService;
