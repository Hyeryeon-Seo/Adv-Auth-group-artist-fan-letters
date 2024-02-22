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
	"commentList/getComments",
	async (payload, thunkAPI) => {
		try {
			// try-catch문도 포함시킴
			const comments = await getCommentsFromDB();
			console.log("comments : ", comments);
			return comments;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const __createComment = createAsyncThunk(
	"commentList/createComment",
	async (newComment, thunkAPI) => {
		try {
			await createComment(newComment);
			const comments = await getCommentsFromDB();
			return comments;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const __deleteComment = createAsyncThunk(
	"commentList/deleteComment",
	async (payload, thunkAPI) => {
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
	"commentList/updateComment",
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
	name: "commentList",
	initialState: {
		comments: [
			...dummyData, // json-server db가져오면 없애기
		],
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
		builder.addCase(__getComments.fulfilled, (state, action) => {
			state.comments = action.payload; // thunk통해 알아서 state도 바꿔주는?
		});

		builder.addCase(__createComment.fulfilled, (state, action) => {
			state.comments.push(action.payload);
		});

		builder.addCase(__deleteComment.fulfilled, (state, action) => {
			const targetIndex = state.comments.findIndex(
				(comment) => comment.id === action.payload
			);
			state.comments.splice(targetIndex, 1); //
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
