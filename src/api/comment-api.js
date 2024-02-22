import axios from "axios";

export const commentClient = axios.create({
	baseURL: import.meta.env.REACT_APP_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getCommentsFromDB = async () => {
	// 시간 순 정렬해서 가져오기
	const data = await commentClient.get("/");
	console.log(data);
	// get("?_sort=createdAt&_order=desc");
	return data;
};

// 외부서버- json-server db에서 조회-가져오고, post 넣고 등등 하기
// redux-Slice 모듈의 set..state와 다름
export const getComments = async () => {
	const { data } = await commentClient.get("/");
	// console.log(data);
	return data;
};

export const getSingleComment = async (id) => {
	const { data } = await commentClient.get(`/${id}`); //?
	return data;
};

export const createComment = async (newComment) => {
	await commentClient.post("/", newComment);
};

export const deleteComment = async (id) => {
	await commentClient.delete(`/${id}`);
};

export const updateComment = async (id, editingText) => {
	await commentClient.patch(`/${id}`, { content: editingText });
};

// export {
// 	getComments,
// 	getSingleComment,
// 	createComment,
// 	deleteComment,
// 	updateComment,

// 이렇게 export 하니 jwt-api에서와 달리 안먹히는 문제
// };
