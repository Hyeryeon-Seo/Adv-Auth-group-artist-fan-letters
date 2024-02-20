// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import commentList from "../modules/commentListSlice";
import member from "../modules/memberSlice";

const store = configureStore({
	reducer: {
		commentList,
		member,
	},
});

export default store;
