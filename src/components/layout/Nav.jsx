import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "../../redux/modules/memberSlice";
import styled, { css } from "styled-components";

function Nav() {
	const memberList = ["카리나", "윈터", "닝닝", "지젤"];
	const commentList = useSelector((state) => state.commentList);
	const activeMember = useSelector((state) => state.member); // store중 어떤 리듀서가 관리하는 상태가져올지 - state.member
	const dispatch = useDispatch(); // 상태변경위해 useDispatch
	// const context = useContext(CommentContext);

	// NOTE nav의 버튼 클릭 시 activeMember을 해당 li의 멤버명으로 변경(set)
	// (스타일링을 위해 쓸 것)
	const onActiveMember = (e) => {
		// if (e.target === e.currentTarget) return;
		dispatch(setMember(e.target.textContent));
		// Redux의 reducer에 상태변경 요청하려면, dispatch해서 action객체를 reducer에게 전달만해주면됨
		// setActiveMember(e.target.textContent);
	};

	// NOTE 전체버튼 -모든 Comment 뜨게하기
	const handleAllCommentsClick = () => {
		dispatch(commentList); //?
	};

	// NOTE nav의 멤버별 li 클릭 시 해당 멤버 목록만 뜨게하기
	// const handleFilterWritedToClick = (clickedMem) => {
	// 	context.setFilteredByMemList(
	// 		commentList.filter((comment) => comment.writedTo === clickedMem)
	// 	);
	// 	context.memRef.current = clickedMem;
	// };

	return (
		<nav>
			<ul>
				<li>
					<MemberTabBtn onClick={() => handleAllCommentsClick()}>
						전체
					</MemberTabBtn>
				</li>
				{memberList.map((mem) => {
					return (
						<li>
							<MemberTabBtn
								id={mem}
								onClick={onActiveMember}
								$activeMember={activeMember}
							>
								{/* onClick={() => handleFilterWritedToClick(mem)} */}
								{mem}
							</MemberTabBtn>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;

const MemberTabBtn = styled.button`
	${(props) => {
		if (props.$activeMember === props.children) {
			return css`
				background-color: yellow;
				color: black;
			`;
		}
		return css`
			background-color: black;
			color: white;
		`;
	}}

	margin-top: 20px;
	box-shadow: 0px 0px 20px 0px var(--maincolor);
	width: 170px;
	height: 50px;
	font-size: large;
	border-radius: 1cm;

	&:hover {
		background-color: yellow;
		color: black;
		box-shadow: 0px 0px 2px 0px var(--maincolor);
		transition: 0.4s;
	}
`;
