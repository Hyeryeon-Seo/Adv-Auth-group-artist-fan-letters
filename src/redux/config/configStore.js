// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import member from "../modules/memberSlice";
import auth from "../modules/authSlice";
import comments from "../modules/commentListSlice";

const store = configureStore({
	reducer: {
		comments,
		member,
		auth,
	},
});

export default store;
