// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux"; // api가져오기
import { combineReducers } from "redux";
import commentList from "../modules/commentList";

const rootReducer = combineReducers({ commentList });
const store = createStore(rootReducer);

export default store;
