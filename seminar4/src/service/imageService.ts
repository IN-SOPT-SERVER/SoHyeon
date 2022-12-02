import { PrismaClient } from "@prisma/client";
import { ImageCreateResponseDto } from "../interfaces/images/imageCreateResponseDto";

const prisma = new PrismaClient();

const uploadImage = async (location: string) => {
  const data = await prisma.image.create({
    data: {
      image: location,
    },
  });
  const result: ImageCreateResponseDto = {
    id: data.id,
    image: data.image,
  };
  return result;
};


const imageService = {
  uploadImage,
}

export default imageService;
