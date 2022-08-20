import { getPhoto } from "./getPhoto";
import { db } from "./db";

export const getUserOwnsPhoto = async (userId, photoId) => {
  const photo = await getPhoto(photoId);
  return photo.ownerId === userId;
};
