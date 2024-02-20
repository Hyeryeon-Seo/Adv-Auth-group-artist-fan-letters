import React from "react";
import Nav from "../layout/Nav";
import CommentItem from "./CommentItem";
import * as S from "styles/CommentListItemStyle";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CommentList() {
	const navigate = useNavigate();
	// 여기서는 상태변경함수없고 단순히 상태를 구독?
	const commentList = useSelector((state) => state.commentList);
	const activeMember = useSelector((state) => state.member);

	const filteredCommentList = commentList.filter(
		(comment) => comment.writedTo === activeMember
	);

	// NOTE 각각의 Comment에 맞는 상세페이지로 이동
	const handleCommentClick = (id) => {
		navigate(`detail/${id}`);
	};

	return (
		<S.ListSection>
			<S.ListSecTitle>Fan Letter Box</S.ListSecTitle>
			<Nav />
			<S.CommentListUl>
				{/* comment가 1개이상 있을 떄 */}
				{filteredCommentList.length > 0 ? (
					filteredCommentList.map((comment) => {
						return (
							// 여기서 return () 으로 안 감싸줘서 리스트 안떴던 문제 해결ㅠㅠ
							<S.CommentItemLi
								key={comment.id}
								onClick={() => handleCommentClick(comment.id)}
							>
								<CommentItem comment={comment} />
							</S.CommentItemLi>
						);
					})
				) : (
					<S.noCommentText>
						아직 💜{activeMember}💜에게 남겨진 팬레터가 없어요. 📭 첫 번째
						팬레터의 주인공이 되어 주세요! 💌
					</S.noCommentText>
				)}
			</S.CommentListUl>
		</S.ListSection>
	);
}

export default CommentList;
