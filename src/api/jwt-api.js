import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authApi = axios.create({
	baseURL: "https://moneyfulpublicpolicy.co.kr",
	headers: {
		"Content-Type": "application/json",
	},
});

// 회원정보 확인
const getUserInfo = async (accessToken) => {
	// accessToken이 유효한 경우 비번제외한 회원정보 응답
	// ?
	const { data } = await authApi.get("/user", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	// console.log(data);
};

// 회원가입
// 회원가입한 회원정보 넣기 (아이디, 비번, 닉네임)
const postRegisteredUser = async (id, password, nickname) => {
	const registeredUser = { id, password, nickname }; // 단축속성명
	const { data } = await authApi.post("/register", registeredUser);
	return data;
};

// 로그인
const postLoggedinUser = // + thunk 함수 ?createAsyncThunk("auth/postLoggedinUser",
	async (id, password) => {
		// 로그인한 회원정보(id,pwd) 넣고 -> DB와 일치 시 accessToken, userId, avatar, nickname 등 유저정보 응답받음
		// + (accessToken저장은 Login.jsx에서 보내서 redux모듈 authSlice가 처리하도록함)
		const loggedinUser = { id, password };
		const { data } = await authApi.post("/login", loggedinUser);
		return data;
	};

// 프로필 변경  - 추가하기

// axios - interceptor
authApi.interceptors.request.use(
	function (config) {
		// 요청 보내기 전 수행
		console.log("인터셉트 요청 성공!");
		return config;
	},
	function (error) {
		// 오류 요청을 보내기 전 수행
		console.log("인터셉트 요청 오류!");
		return Promise.reject(error);
	}
);

authApi.interceptors.response.use(
	function (response) {
		console.log("인터셉트 응답 받았어요!");
		// 정상 응답
		return response;
	},

	function (error) {
		console.log("인터셉트 응답 못받았어요...ㅠㅠ");
		// console.log(error);
		return Promise.reject(error);
	}
);

export { getUserInfo, postRegisteredUser, postLoggedinUser };
