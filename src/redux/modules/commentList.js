import { dummyData } from "../../shared/fakeData";

const ADD_COMMENT = "comments/ADD_COMMENT"; // 팬레터 추가
const DELETE_COMMENT = "comments/DELETE_COMMENT"; // 삭제
const EDIT_COMMENT = "comments/EDIT_COMMENT"; // 수정

export const addComment = (payload) => {
	// 필요한 인자로 받는게 payload
	return { type: ADD_COMMENT, payload };
};
export const deleteComment = (payload) => {
	return { type: DELETE_COMMENT, payload };
};
export const editComment = (payload) => {
	return { type: EDIT_COMMENT, payload };
};

const initialState = {
	dummyData,
};

const commentList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT:
			const newComment = action.payload;
			return [newComment, ...state.dummyData];
		case DELETE_COMMENT:
			const commentId = action.payload;
			return state.filter((comment) => comment.id !== commentId);
		// 왜 초기값 state (더미데이터?)에서 filter? => state는 현상태? 지 초기값아닌듯
		// filter 불변성 유지 가능 (새로운배열반환)
		case EDIT_COMMENT:
			// 아이디, 수정내용 모두 받아야
			const { id, editingText } = action.payload;
			return state.map((comment) => {
				if (comment.id === id) {
					return { ...comment, content: editingText };
				}
				return comment;
			});
		// map메서드 역시 불변성 유지 가능
		default:
			return state;
	}
};

export default commentList; // 만든 리듀서함수 내보내기
