import { db } from "./db";

export const getUser = async (userId) => {
  return await db.getConnection().collection("users").findOne({ id: userId });
};
