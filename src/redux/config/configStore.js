// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import commentList from "../modules/commentListSlice";
import member from "../modules/memberSlice";
import auth from "../modules/authSlice";

const store = configureStore({
	reducer: {
		commentList,
		member,
		auth,
	},
});

export default store;
