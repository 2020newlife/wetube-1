import express from "express";
import routes from "../routes";
import {
  videoGetUpload,
  videoPostUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, videoGetUpload);
videoRouter.post(routes.upload, uploadVideo, videoPostUpload);
// edit video
videoRouter.get(routes.edit_video(), getEditVideo);
videoRouter.post(routes.edit_video(), postEditVideo);

videoRouter.get(routes.delete_video(), deleteVideo);
videoRouter.get(routes.videos_detail(), videoDetail);

export default videoRouter;
