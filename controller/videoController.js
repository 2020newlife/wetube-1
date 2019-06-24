//user
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("video/search");

//video
export const video_upload = (req, res) => res.render("video/video_upload");
export const video_detail = (req, res) => res.render("video/video_detail");
export const edit_video = (req, res) => res.render("video/edit_video");
export const delete_video = (req, res) => res.render("video/delete_video");
