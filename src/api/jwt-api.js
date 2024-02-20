import axios from "axios";

export const jwtInstance = axios.create({
	baseURL: "https://moneyfulpublicpolicy.co.kr",
	headers: {
		"Content-Type": "application/json",
	},
});

const getUserInfo = async (accessToken) => {
	// 회원정보 확인 (accessToken이 유효한 경우 비번제외 회원정보 응답)
	// ?
	const { data } = await jwtInstance.get("/user", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	console.log(data);
};

const postRegisteredUser = async (RegisteredUser) => {
	// 회원가입한 회원정보 넣기 (아이디, 비번, 닉네임)
	const { data } = await jwtInstance.post("/register", RegisteredUser);
	console.log(data);
};

const postLoggedinUser = async (LoggedinUser) => {
	// 로그인한 회원정보(id,pwd) 넣고 -> DB와 일치 시 accessToken 등 유저정보 응답받음
	const { data } = await jwtInstance.post("/login", LoggedinUser);
	// console.log(data); // {accessToken: .. , userId: ..., ..}
	localStorage.setItem("token", data.accessToken);
};

// 프로필 변경  - 추가하기

export { getUserInfo, postRegisteredUser, postLoggedinUser };
