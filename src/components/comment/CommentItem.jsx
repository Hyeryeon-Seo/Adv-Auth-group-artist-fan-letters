import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "styles/CommentListItemStyle";
import { getFormattedDate } from "../../util/date";

function CommentItem({ comment, pageName, isEditing, textareaChange }) {
	// 에러해결중: 새로추가한 comment의 id 문자열형태로 잘 들어가는 것 확인
	// commentList -> CommentItem : props 사용
	const { avatar, nickname, createdAt, content } = comment;

	// NOTE 각각의 Comment에 맞는 상세페이지로 이동
	// const handleCommentClick = (id) => {
	// 	navigate(`detail/${id}`);
	// };

	return (
		<>
			<S.AvatarImg src={avatar} />
			<S.CommentTextBox $detail={pageName}>
				<S.CommentNameDateBox $detail={pageName}>
					<h5>{nickname}</h5>
					<time>{getFormattedDate(createdAt)}</time>
				</S.CommentNameDateBox>
				{/* 이중 삼항연산자 */}
				{pageName === "detail" ? (
					isEditing ? (
						<>
							<S.DetailTextarea
								autoFocus
								defaultValue={content}
								onChange={textareaChange}
								placeholder="내용은 최대 250자까지만 작성할 수 있어요."
								maxLength="250"
							/>
						</>
					) : (
						<S.CommentContent $detail={pageName}>{content}</S.CommentContent>
					)
				) : (
					<S.CommentContent $detail={pageName}>{content}</S.CommentContent>
				)}
			</S.CommentTextBox>
		</>
	);
}

export default CommentItem;
