import { getPhotosForUser } from "../db";

export const getMyPhotosRoute = {
  method: "get",
  path: "/api/my-photos",
  handler: async (req, res) => {
    const photos = await getPhotosForUser(req.user.user_id); //user is set at protectRoute.js middleware
    res.status(200).json(photos);
  },
};
