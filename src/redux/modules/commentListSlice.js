import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../shared/fakeData";

const initialState = dummyData;

// 기존 리듀서
// const commentList = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ADD_COMMENT:
// 			const newComment = action.payload;
// 			return [newComment, ...state]; // state.dummyData 말고 그냥 state
// 		case DELETE_COMMENT:
// 			const commentId = action.payload;
// 			return state.filter((comment) => comment.id !== commentId);
// 		// 왜 초기값 state (더미데이터?)에서 filter? => state는 현상태? 지 초기값아닌듯
// 		// filter 불변성 유지 가능 (새로운배열반환)
// 		case EDIT_COMMENT:
// 			// 아이디, 수정내용 모두 받아야
// 			// action.payload를 객체상태로 넘겨받아서 키인 id, editingText로 .. 구분할
// 			const { id, editingText } = action.payload;
// 			return state.map((comment) => {
// 				if (comment.id === id) {
// 					return { ...comment, content: editingText };
// 				}
// 				return comment;
// 			});
// 		// map메서드 역시 불변성 유지 가능
// 		default:
// 			return state;
// 	}
// };

const commentListSlice = createSlice({
	name: "commentList",
	initialState,
	reducers: {
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
});

export default commentListSlice.reducer;
export const { addComment, deleteComment, editComment } =
	commentListSlice.actions;
