import React, { useState } from "react";
import CustomInput from "components/common/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/modules/commentList"; // import 꼭 해주기!
import * as S from "styles/FormSectionStyle";
import CustomTextarea from "../common/CustomTextarea";

function CommentForm() {
	const memberList = ["카리나", "윈터", "닝닝", "지젤"];
	const dispatch = useDispatch();

	// const commentList = useSelector((state) => state.commentList);
	const [nickname, setNickname] = useState("");
	const [content, setContent] = useState("");
	const [writedTo, setWritedTo] = useState("카리나");

	// (form) input의 입력value값 (닉네임) 가져오기 (가져와서 state set해줌)
	const handleNicknameInputChange = (e) => {
		setNickname(e.target.value);
	};

	// (form) textarea의 입력value값 (내용) 가져오기
	const handleContentTextChange = (e) => {
		setContent(e.target.value);
	};

	// (select)-option의 선택value값 (writedTo) 가져오기
	const handleWritedToSelectChange = (e) => {
		setWritedTo(e.target.value);
	};

	// 등록하기
	// const addCommentHandler = (newComment) => {
	// 	setCo((prevCommentList) => [newComment, ...prevCommentList]);
	// };

	// // form태그 제출 시 (코멘트 추가 버튼, 등록 / 기존 input,textarea 글자 초기화
	// FIXME 처음에 멤버선택 카리나 초기그대로 둔상태에서 등록시, 카리나 눌렀을때 안뜸
	// 다른거 눌렀다가 돌아와야 (바로 렌더링X?) 추가된 comment 뜸
	const onAddCommentList = (e) => {
		e.preventDefault();

		// 유효성 검사
		if (!nickname || !content) {
			return alert("닉네임과 내용을 모두 입력해주세요");
		}

		const newComment = {
			id: crypto.randomUUID(), // 고유한 id 부여
			createdAt: new Date(),
			nickname,
			avatar: "src/assets/default-avatar.png",
			content,
			writedTo, //
		};
		dispatch(addComment(newComment)); // 임포트 주의!!
		setNickname("");
		setContent("");
	};

	return (
		<form onSubmit={onAddCommentList}>
			<CustomInput
				type="text"
				value={nickname}
				onChange={handleNicknameInputChange}
				placeholder="닉네임은 최대 20자까지만 가능해요."
			>
				닉네임
			</CustomInput>
			<CustomTextarea
				value={content}
				onChange={handleContentTextChange}
				maxLength="100"
				placeholder="내용은 최대 100자까지만 작성할 수 있어요."
			>
				내용
			</CustomTextarea>
			<S.SelectBox>
				<S.SelectLabel>To.</S.SelectLabel>
				<select onChange={handleWritedToSelectChange}>
					{/*  value={writedTo */}
					{memberList.map((mem) => {
						return (
							<option value={mem} key={mem}>
								{mem}
							</option>
						);
					})}
				</select>
			</S.SelectBox>
			<S.AddBtn type="submit">팬레터 등록</S.AddBtn>
		</form>
	);
}

export default CommentForm;
