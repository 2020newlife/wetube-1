import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.edit_profile, editProfile);
userRouter.get(routes.change_password, changePassword);
userRouter.get(routes.users_detail(), userDetail);

// 기존에는 변수에 export를 해줬는데 그럴 경우 변수만 익스포트 되고
// 아래처럼 할 경우 전체가 다 익스포트 된다.
export default userRouter;
