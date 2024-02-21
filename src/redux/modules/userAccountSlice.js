import { createSlice } from "@reduxjs/toolkit";

const defaultAvatarSrc = "src/assets/default-avatar.png";
const initialState = {
	accessToken: "",
	userId: "",
	nickname: "",
	avatar: defaultAvatarSrc,
};
// isLogin 넣어야하나? authSlice에서 관리하는데
// userId 랜덤 uuid 등 넣어주기
// 처음 회원가입 시 token, userId, nickname 설정 / avatar는 디폴트로

// userAccount s ? 배열?

const userAccountSlice = createSlice({
	name: "userAccount",
	initialState,
	reducers: {
		setUserAccount: (state, action) => {
			// ?
			const registeredUserAccount = action.payload; // registered.. {accessToken:,userId:,nickname:,}객체로 받아서?
			const newUserAccount = {
				...registeredUserAccount,
				avatar: defaultAvatarSrc,
			};
			localStorage.setItem("userAccount", newUserAccount);
			// return
		},
	},
});
