import { getMyPhotosRoute } from "./getMyPhotosRoute";
import { getPhotoRoute } from "./getPhotoRoute";
import { getSharedWithMePhotosRoute } from "./getSharedWithMePhotosRoute";
import { shareWithEmailRoute } from "./shareWithEmailRoute";
import { uploadPhotoRoute } from "./uploadPhotoRoute";

export const routes = [
  getSharedWithMePhotosRoute,
  getMyPhotosRoute,
  uploadPhotoRoute,
  getPhotoRoute,
  shareWithEmailRoute,
];
