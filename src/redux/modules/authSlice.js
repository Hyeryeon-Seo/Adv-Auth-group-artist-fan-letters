import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false }; // 유저 로그인상태 - 처음은 로그인 x상태

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, action) => {
			const userAuth = action.payload; // true, false 받아서
			return { isLogin: userAuth };
		},
	},
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
