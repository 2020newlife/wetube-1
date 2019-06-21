import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send("USER HOME"));
userRouter.get(routes.users_detail, (req, res) => res.send("USER DETAIL"));
userRouter.get(routes.edit_profile, (req, res) =>
  res.send("USER EDIT PROFILE")
);
userRouter.get(routes.change_password, (req, res) =>
  res.send("USER CHANGE PASSWORD")
);

//기존에는 변수에 export를 해줬는데 그럴 경우 변수만 익스포트 되고
//아래처럼 할 경우 전체가 다 익스포트 된다.
export default userRouter;
