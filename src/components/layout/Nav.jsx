import React from "react";
// import { CommentContext } from "../../context/CommentContext";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "../../redux/modules/member";

function Nav() {
	const memberList = ["카리나", "윈터", "닝닝", "지젤"];
	const commentList = useSelector((state) => state.commentList);
	const activeMember = useSelector((state) => state.member);
	const dispatch = useDispatch(); // 상태변경위해 useDispatch
	// 이어서 하기
	// const context = useContext(CommentContext);

	// NOTE nav의 버튼 클릭 시 activeMember을 해당 li의 멤버명으로 변경(set)
	// (스타일링을 위해 쓸 것)
	const onActiveMember = (e) => {
		if (e.target === e.currentTarget) return;

		dispatch(setMember(e.target.textContent));
		// Redux의 reducer에 상태변경 요청하려면, dispatch해서 action객체를 reducer에게 전달만해주면됨
		// setActiveMember(e.target.textContent);
	};

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		context.setFilteredByMemList(commentList);
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	const handleFilterWritedToClick = (clickedMem) => {
		context.setFilteredByMemList(
			commentList.filter((comment) => comment.writedTo === clickedMem)
		);

		context.memRef.current = clickedMem;
	};

	return (
		<nav>
			<ul>
				<li>
					<button onClick={() => handleAllCommentsClick()}>전체</button>
				</li>
				{memberList.map((mem) => {
					return (
						<li>
							<button onClick={() => handleFilterWritedToClick(mem)}>
								{mem}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;
