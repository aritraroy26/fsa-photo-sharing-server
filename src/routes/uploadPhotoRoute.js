import { addNewPhoto } from "../db";
import { extname } from "path";
import { v4 as uuid } from "uuid";

export const uploadPhotoRoute = {
  method: "post",
  path: "/api/upload",
  handler: async (req, res) => {
    const user = req.user;
    const { title } = req.body;
    const fileExtension = extname(req.files.file.name); //this file is added to request by express fileupload (used in server.js)
    const newFileName = uuid() + fileExtension;
    await addNewPhoto("/" + newFileName, title, user.user_id);
    req.files.file.mv("src/uploads/" + newFileName, (err) => {
      res.status(200).json({ message: "Upload successful!" });
    });
  },
};
