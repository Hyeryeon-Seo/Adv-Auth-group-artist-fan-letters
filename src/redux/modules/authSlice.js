import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		// 토큰 저장한게 남아있다면 'true'로 판단, 로그아웃 상태로 localStroage clear되어 안에 없으면 'false'로 판단
		// 로그아웃안하면 유지됨 (새로고침해도)
		isLogin: !!localStorage.getItem("accessToken"),
		// status: "idle", // loading, succeeded, failed
		// error: null, // 요청 실패 시 에러 메세지 저장
	},
	reducers: {
		login: (state, action) => {
			const accessToken = action.payload; // accessToken 을 payload로 받아서 여기 redux 리듀서에서 localStorage 처리
			localStorage.setItem("accessToken", accessToken);
			state.isLogin = true;
		},
		logout: (state, action) => {
			state.isLogin = false;
			localStorage.clear();
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

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
