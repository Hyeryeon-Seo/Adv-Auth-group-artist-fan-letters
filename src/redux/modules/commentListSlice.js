import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../shared/fakeData";

// const initialState = dummyData;

// thunk 를 통해, comment-api (json-server DB 활용)와 연결시키기?
export const getCommentsThunk = createAsyncThunk("commentList/getComments");
export const createCommentThunk = createAsyncThunk("commentList/createComment");
export const deleteCommentThunk = createAsyncThunk("commentList/deleteComment");
export const updateCommentThunk = createAsyncThunk("commentList/updateComment");

const commentListSlice = createSlice({
	name: "commentList",
	initialState: {
		comments: [
			// {
			// 	createdAt: "2023-11-03T02:07:09.423Z",
			// 	nickname: "Dr. Clint Christiansen",
			// 	avatar:
			// 		"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
			// 	content:
			// 		"카리나1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
			// 	writedTo: "카리나",
			// 	id: "1",
			// 	userId: "1",
			// },
			...dummyData, // json-server db가져오면 없애기
		],
	},
	reducers: {
		setComments: (state, action) => {
			const comments = action.payload;
			return (state.comments = comments); // ?
		},
		addComment: (state, action) => {
			const newComment = action.payload;
			return [newComment, ...state]; // RTK에선 불변성유지됨 - push로 바꿔보기
		},
		deleteComment: (state, action) => {
			const commentId = action.payload;
			return state.filter((comment) => comment.id !== commentId);
		},
		editComment: (state, action) => {
			const { id, editingText } = action.payload;
			return state.map((comment) => {
				if (comment.id === id) {
					return { ...comment, content: editingText };
				}
				return comment;
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCommentsThunk.fulfilled, (state, action) => {
			state.comments = action.payload; // thunk통해 알아서 state도 바꿔주는?
		});

		builder.addCase(createCommentThunk.fulfilled, (state, action) => {
			state.comments.push(action.payload);
		});

		builder.addCase(deleteCommentThunk.fulfilled, (state, action) => {
			const targetIndex = state.comments.findIndex(
				(comment) => comment.id === action.payload
			);
			state.comments.splice(targetIndex, 1); //
		});
	},
});

export default commentListSlice.reducer;
export const { addComment, deleteComment, editComment } =
	commentListSlice.actions;
