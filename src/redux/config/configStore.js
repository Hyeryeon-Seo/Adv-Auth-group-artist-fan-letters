// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux"; // api가져오기
import { combineReducers } from "redux";
import commentList from "../modules/commentList";
import member from "../modules/member";

const rootReducer = combineReducers({ commentList, member });
// 여기에 member 추가안해줘서 기능작동 X ㅠㅠ configStore도 꼭 신경! (모듈 imrport도)
const store = createStore(rootReducer);

export default store;
