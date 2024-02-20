import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";
import * as S from "styles/PagesStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../redux/modules/commentListSlice";
import { getFormattedDate } from "../util/date";
import CommentItem from "../components/comment/CommentItem";
// import { defaultAvatar } from "src/assets/default-avatar.png";

function Detail() {
	const dispatch = useDispatch();
	const commentList = useSelector((state) => state.commentList);

	const [isEditing, setIsEditing] = useState(false);
	const [editingText, setEditingText] = useState("");

	const navigate = useNavigate();
	const { id } = useParams();
	const selectedComment = commentList.find((comment) => comment.id == id);

	// console.log(comment);

	const handleHomeClick = () => {
		navigate("/");
	};

	// 삭제
	const handleDeleteCommentBtn = () => {
		if (window.confirm("정말 삭제하실 건가요?")) {
			dispatch(deleteComment(id)); // ijmport 잊지말기
			alert("팬레터가 삭제되었습니다");
			// 홈화면으로 이동
			navigate("/");
		}
	};

	const handleEditingTextChange = (e) => {
		setEditingText(e.target.value);
	};

	// 수정
	const handleEditDoneBtn = () => {
		// id 인자로 받을 필요가 없는게, 그냥 이 detail페이지 받아온 id 바로 쓰면됨 (?)
		if (!editingText) return alert("수정사항이 없습니다");

		dispatch(editComment({ id, editingText }));
		setIsEditing(false);
		setEditingText("");
	};

	return (
		<S.LayoutDiv>
			<Header />
			<S.DetailBtn onClick={handleHomeClick}>Home</S.DetailBtn>
			<article>
				{/* <S.DetailAvaterImg src={avatar} />
				{/* 기본이미지는 엑박으로 뜨는 문제 *
				<h3>{nickname}</h3>
				<time>{getFormattedDate(createdAt)}</time>
				<p>To. {writedTo} </p> */}
				<CommentItem
					comment={selectedComment}
					pageName="detail"
					isEditing={isEditing}
					textareaChange={handleEditingTextChange}
				></CommentItem>
				{isEditing ? (
					<S.DetailBtnBox>
						{/* <S.DetailTextarea
							defaultValue={content}
							onChange={(e) => setEditingText(e.target.value)}
						/> */}
						<S.DetailBtn onClick={() => setIsEditing(false)}>취소</S.DetailBtn>
						<S.DetailBtn onClick={handleEditDoneBtn}>수정 완료</S.DetailBtn>
					</S.DetailBtnBox>
				) : (
					<S.DetailBtnBox>
						{/* <S.CommentContent>{content}</S.CommentContent> */}
						<S.DetailBtn onClick={() => setIsEditing(true)}>수정</S.DetailBtn>
						<S.DetailBtn onClick={handleDeleteCommentBtn}>삭제</S.DetailBtn>
					</S.DetailBtnBox>
				)}
			</article>
			<Footer />
		</S.LayoutDiv>
	);
}

export default Detail;
