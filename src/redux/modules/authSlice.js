import { createSlice } from "@reduxjs/toolkit";
import { postLoggedinUser } from "../../api/jwt-api";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLogin: false, // 유저 로그인상태 - 처음은 로그인 x상태
		// status: "idle", // loading, succeeded, failed
		// error: null, // 요청 실패 시 에러 메세지 저장
	},
	reducers: {
		setAuth: (state, action) => {
			const userAuth = action.payload; // true, false 받아서
			return { isLogin: userAuth };
		},
	},
	// + thunk?
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(postLoggedinUser.pending, (state, action) => {
	// 			state.status = "loading";
	// 			console.log(state.status);
	// 		})
	// 		.addCase(postLoggedinUser.fulfilled, (state, action) => {
	// 			state.status = "succeeded";
	// 			state.isLogin = action.payload; // 요청 성공적 완료된 경우, 상태 업데이트
	// 			// ? 로그인 상태 바꿔주기
	// 		})
	// 		.addCase(postLoggedinUser.rejected, (state, action) => {
	// 			state.status = "failed";
	// 			state.error = action.error.message;
	// 		});
	// },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
