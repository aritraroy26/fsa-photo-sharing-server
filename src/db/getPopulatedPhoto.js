import { getPhoto } from "./getPhoto";
import { getUser } from "./getUser";

export const getPopulatedPhoto = async (photoId) => {
  const photo = await getPhoto(photoId);
  const users = await Promise.all(
    photo.sharedWith.map((userId) => getUser(userId))
  ); // we need to use Promise.all() when using map function
  const userEmails = users.map((user) => user.email);
  const populatedPhotos = {
    ...photo,
    sharedWithEmails: userEmails,
  };
  return populatedPhotos;
};
