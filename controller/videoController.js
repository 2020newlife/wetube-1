import routes from "../routes";
import Video from "../models/Video";
// user
// DB에서 데이터를 가져오는 동안 JS는 다음줄을 처리해 버리는 일이 일어날 수 있다.
// DB의 데이터를 가져오고 나서 페이지를 호출하기 위해 async로 싱크를 맞춰준다.
export const home = async (req, res) => {
  // try catch는 Java처럼 에러 처리를 위해 사용한다. DB와의 접속에서 에러가 발생할 수 있기 때문에 예외처리를 한다.
  try {
    // await는 DB에서 데이터를 가져오는 동안 대기하고 있으라는 명령어 async가 존재할 때만 사용가능
    // find({})는 DB에 있는 모든 비디오를 가져온다.
    const videos = await Video.find({}).sort({ _id: -1 });
    console.log(videos);
    res.render("home", { pageTitle: "Root", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Root", videos: [] });
  }
};
export const search = async (req, res) => {
  // Es5
  // const searchingBy = req.query.searchWrd;
  // Es6
  const {
    query: { searchWrd: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  console.log(videos);

  res.render("video/search", { pageTitle: "Search", searchingBy, videos });
};

// video
export const videoGetUpload = (req, res) => {
  res.render("video/video_upload", { pageTitle: "Upload" });
};
export const videoPostUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  console.log(path);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videos_detail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    console.log(id);
    const video = await Video.findById(id);
    console.log(video);
    res.render("video/video_detail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("video/edit_video", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  console.log(id, title, description);

  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videos_detail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
