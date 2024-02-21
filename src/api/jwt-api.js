import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const jwtInstance = axios.create({
	baseURL: "https://moneyfulpublicpolicy.co.kr",
	headers: {
		"Content-Type": "application/json",
	},
});

// 회원정보 확인
const getUserInfo = async (accessToken) => {
	// accessToken이 유효한 경우 비번제외한 회원정보 응답
	// ?
	const { data } = await jwtInstance.get("/user", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	// console.log(data);
};

// 회원가입
const postRegisteredUser = async (id, password, nickname) => {
	console.log(id, password, nickname);
	// 회원가입한 회원정보 넣기 (아이디, 비번, 닉네임)
	const registeredUser = { id: id, password: password, nickname: nickname }; // 단축속성명
	const { data } = await jwtInstance.post("/register", registeredUser);
	// console.log(data); // {message: '회원가입 완료', success: true} 인데 반환해서 login.jsx에서 출력해보면 Promise로 뜸
	// if (data.message === "회원가입 완료") {
	return data;
};

// 로그인
const postLoggedinUser = // + thunk 함수 ?createAsyncThunk("auth/postLoggedinUser",
	async (LoggedinUser) => {
		// 로그인한 회원정보(id,pwd) 넣고 -> DB와 일치 시 accessToken 등 유저정보 응답받음
		const { data } = await jwtInstance.post("/login", LoggedinUser);
		// console.log(data); // {accessToken: .. , userId: ..., ..}
		localStorage.setItem("loggedInUserToken", data.accessToken); // 로컬스토리지에 토큰 저장
	};

// 프로필 변경  - 추가하기

// axios - interceptor
jwtInstance.interceptors.request.use(
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

jwtInstance.interceptors.response.use(
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

export { jwtInstance, getUserInfo, postRegisteredUser, postLoggedinUser };
