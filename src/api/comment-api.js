import axios from "axios";

const commentClient = axios.create({
	baseURL: import.meta.env.REACT_APP_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// 외부서버- json-server db에서 조회-가져오고, post 넣고 등등 하기
// redux-Slice 모듈의 set..state와 다름

const getComments = async () => {
	const { data } = await commentClient.get("/");
	// console.log(data);
	return data;
};

const getSingleComment = async (id) => {
	const { data } = await commentClient.get(`/${id}`); //?
	return data;
};

const createComment = async (comment) => {
	await commentClient.post("/", comment);
};

const deleteComment = async (id) => {
	await commentClient.delete(`/${id}`);
};

const updateComment = async (id, comment) => {
	await commentClient.patch(`/${id}`, comment);
};

export {
	getComments,
	getSingleComment,
	createComment,
	deleteComment,
	updateComment,
};
