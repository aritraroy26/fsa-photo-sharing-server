import { db } from "./db";

export const getSharedPhotosForUser = async (userId) => {
  return await db
    .getConnection()
    .collection("photos")
    .find({ sharedWith: userId }) //in mongo contains search is done the same way exact search
    .toArray();
};
