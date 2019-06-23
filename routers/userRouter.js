import express from "express";
import routes from "../routes";
import {
  user_home,
  user_detail,
  edit_profile,
  change_password
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.home, user_home);
userRouter.get(routes.users_detail, user_detail);
userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);

//기존에는 변수에 export를 해줬는데 그럴 경우 변수만 익스포트 되고
//아래처럼 할 경우 전체가 다 익스포트 된다.
export default userRouter;
