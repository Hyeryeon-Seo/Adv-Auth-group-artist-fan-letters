import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import CommentItem from "./CommentItem";
import * as S from "styles/CommentListItemStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getComments } from "../../redux/modules/commentListSlice";

function CommentList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const data = getComments();
	// 	// dispatch(setComments(data));
	// }, []);

	const commentList = useSelector((state) => state.comments.commentsData); // commentList를 못가져오는 문제가 있는데.. 콘솔에 다른 두개가 찍힌다 혹시나 하여 이름변경?
	// 어쩌피 의미 x일지도. 여튼   state.store의 리듀서들중 이름, . initial state안 키값
	const activeMember = useSelector((state) => state.member);

	console.log(commentList);

	const filteredCommentList = commentList.filter(
		(comment) => comment.writedTo === activeMember
	);

	// NOTE 각각의 Comment에 맞는 상세페이지로 이동
	const handleCommentClick = (id) => {
		navigate(`detail/${id}`);
	};

	useEffect(() => {
		dispatch(__getComments());
	}, [dispatch]);

	if (!commentList) {
		<p>Loading ...</p>;
	}

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
