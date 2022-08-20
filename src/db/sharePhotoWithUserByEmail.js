import { ObjectId } from "mongodb";
import { db } from "./db";

export const sharePhotoWithUserByEmail = async (photoId, email) => {
  const connection = db.getConnection();
  const user = await connection.collection("users").findOne({ email });
  //$addToSet -> inserts into array without causing duplicates
  await connection
    .collection("photos")
    .updateOne(
      { _id: ObjectId(photoId) },
      { $addToSet: { sharedWith: user.id } }
    );
};
