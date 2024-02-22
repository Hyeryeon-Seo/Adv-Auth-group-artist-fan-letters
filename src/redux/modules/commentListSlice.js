import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../shared/fakeData";
import {
	createComment,
	getCommentsFromDB,
	updateComment,
} from "../../api/comment-api";

// const initialState = dummyData;

// thunk 를 통해, comment-api (json-server DB 활용)와 연결시키기?
export const __getComments = createAsyncThunk(
	"comment/getComments",
	async (payload, thunkAPI) => {
		try {
			// try-catch문도 포함시킴
			const comments = await getCommentsFromDB(); // comments는 배열
			console.log("comments : ", comments);
			return comments; // 리듀서로 넘겨주기
		} catch (err) {
			return thunkAPI.rejectWithValue(err); // 이렇게 써주면(문법), err에러객체가 extraReducers로 자동으로 넘어감 (거기서쓰는 state.erorr로)
		}
	}
);

export const __createComment = createAsyncThunk(
	"comment/createComment",
	async (newComment, thunkAPI) => {
		try {
			await createComment(newComment);
			const comments = await getCommentsFromDB(); // DB와 UI 동기화위해, new letter(comment)가 추가된 DB를 가져온다
			return comments;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const __deleteComment = createAsyncThunk(
	"comment/deleteComment",
	async (payload, thunkAPI) => {
		// payload creator
		try {
			await deleteComment;
			const comments = await getCommentsFromDB;

			return comments;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const __updateComment = createAsyncThunk(
	"comment/updateComment",
	async ({ id, editingText }, thunkAPI) => {
		try {
			await updateComment(id, editingText);
			const comments = await getCommentsFromDB;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

const commentListSlice = createSlice({
	name: "comment", // 다른 곳에서 useSeletor((state) => )가져올때 state.뒤 쓰는 이름 아님! state.뒤에는 store에 쓴 걸로 가져와야
	initialState: {
		commentsData: [], // ...dummyData, // json-server db가져오면 없애기
		isLoading: true, // json-server api 요청 (thunk로?) 후 받은 응답값에 따라 바뀐다
		isError: false,
		error: null,
	},
	reducers: {
		// setComments: (state, action) => {
		// 	const comments = action.payload;
		// 	return (state.comments = comments); // ?
		// },
		// addComment: (state, action) => {
		// 	const newComment = action.payload;
		// 	state.comments.unshift(newComment);
		// 	// return [newComment, ...state]; // RTK에선 불변성유지 알아서 됨
		// },
		// deleteComment: (state, action) => {
		// 	const commentId = action.payload;
		// 	return state.comments.filter((comment) => comment.id !== commentId);
		// },
		// editComment: (state, action) => {
		// 	const { id, editingText } = action.payload;
		// 	return state.comments.map((comment) => {
		// 		if (comment.id === id) {
		// 			return { ...comment, content: editingText };
		// 		}
		// 		return comment;
		// 	});
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(__getComments.fulfilled, (state, action) => {
				// comments(배열)를 action.payload로 넘겨받아
				// console.log(...action.payload);
				state.commentsData = action.payload; // thunk통해 알아서 state도 바꿔주는? // 에러 해결ㅠㅠ 다른 곳에서 useSelector할때처럼 state.comments.commentsData가 아니라
				// 현재 이 state에서의 (얘가 commentListSlice함수 안이라서).commentsData !
			})
			.addCase(__createComment.fulfilled, (state, action) => {
				state.comments.commentsData.unshift(action.payload);
			})
			.addCase(__deleteComment.fulfilled, (state, action) => {
				const targetIndex = state.comments.findIndex(
					(comment) => comment.id === action.payload
				);
				state.comments.commentsData.splice(targetIndex, 1); //
			});
	},
});
// [__getComments.pending]: (state, action) => {
// 	state.isLoading = true;
// },
// [__getComments.fulfilled]: (state, action) => {
// 	state.isLoading = false;
// 	state.comments = action.payload;
// 	state.isError = false;
// 	state.error = null;
// },
// [__getComments.rejected]: (state, action) => {
// 	state.isLoading = false;
// 	state.isError = true;
// 	state.error = action.payload;
// },
// [__createComment.pending]: (state, action) => {
// 	state.isLoading = true;
// },
// [__createComment.fulfilled]: (state, action) => {
// 	state.isLoading = false;
// 	state.comments = action.payload;
// 	state.isError = false;
// 	state.error = null;
// },
// [__createComment.rejected]: (state, action) => {
// 	state.isLoading = false;
// 	state.isError = true;
// 	state.error = action.payload;
// },
// [__deleteComment.pending]: (state, action) => {
// 	state.isLoading = true;
// },
// [__deleteComment.fulfilled]: (state, action) => {
// 	state.isLoading = false;
// 	state.comments = action.payload;
// 	state.isError = false;
// 	state.error = null;
// },
// [__deleteComment.rejected]: (state, action) => {
// 	state.isLoading = false;
// 	state.isError = true;
// 	state.error = action.payload;
// },
// [__updateComment.pending]: (state, action) => {
// 	state.isLoading = true;
// },
// [__updateComment.fulfilled]: (state, action) => {
// 	state.isLoading = false;
// 	state.comments = action.payload;
// 	state.isError = false;
// 	state.error = null;
// },
// [__updateComment.rejected]: (state, action) => {
// 	state.isLoading = false;
// 	state.isError = true;
// 	state.error = action.payload;
// },

export default commentListSlice.reducer;
// export const { addComment, deleteComment, editComment } =
// 	commentListSlice.actions;
