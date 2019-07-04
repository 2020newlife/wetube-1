import routes from "../routes";
import Video from "../models/Video";
//user
//DB에서 데이터를 가져오는 동안 JS는 다음줄을 처리해 버리는 일이 일어날 수 있다.
//DB의 데이터를 가져오고 나서 페이지를 호출하기 위해 async로 싱크를 맞춰준다.
export const home = async (req, res) => {
  //try catch는 Java처럼 에러 처리를 위해 사용한다. DB와의 접속에서 에러가 발생할 수 있기 때문에 예외처리를 한다.
  try {
    // await는 DB에서 데이터를 가져오는 동안 대기하고 있으라는 명령어 async가 존재할 때만 사용가능
    // find({})는 DB에 있는 모든 비디오를 가져온다.
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "Root", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Root", videos: [] });
  }
};
export const search = (req, res) => {
  // Es5
  //const searchingBy = req.query.searchWrd;
  // Es6
  const {
    query: { searchWrd: searchingBy }
  } = req;
  console.log(req.query);
  res.render("video/search", { pageTitle: "Search", searchingBy, videos });
};

//video
export const video_getUpload = (req, res) => {
  res.render("video/video_upload", { pageTitle: "Upload" });
};
export const video_postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do : 비디오 저장 및 업로드
  res.redirect(routes.videos_detail(33333));
};
export const video_detail = (req, res) => {
  res.render("video/video_detail", { pageTitle: "Video Detail" });
};
export const edit_video = (req, res) => {
  res.render("video/edit_video", { pageTitle: "Edit Video" });
};
export const delete_video = (req, res) => {
  res.render("video/delete_video", { pageTitle: "Delete Video" });
};
