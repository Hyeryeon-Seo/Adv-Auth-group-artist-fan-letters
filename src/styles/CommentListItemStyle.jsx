import styled, { css } from "styled-components";

export const ListSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 600px;
`;

export const ListSecTitle = styled.h2`
	color: yellow;
	padding-top: 50px;
	// 전역스타일링 h2도 같이 적용됨
`;

export const CommentListUl = styled.ul`
	display: flex;
	justify-content: center;
	margin: 50px auto 10px auto;
	padding-bottom: 60px;
	width: 800px;
	flex-wrap: wrap;
	gap: 20px;
	color: white;
`;

export const CommentItemLi = styled.li`
	display: flex;
	align-items: center;
	margin-top: 10px;
	background-color: #b46bb4;
	border-radius: 30px;
	width: 700px;
	height: 130px;
	font-size: 20px;
	margin-right: 15px;
	gap: 30px;

	cursor: pointer;
	&:hover {
		transition: all 0.2s;
		transform: scale(1.03);
		box-shadow: 0px 0px 20px 1px var(--maincolor);
	}

	color: black;
	padding: 0px 0px 0px 20px;
`;

export const AvatarImg = styled.img`
	width: 100px;
`;

export const noCommentText = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;
	font-size: 20px;
`;

export const CommentTextBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	${(props) => {
		if (props.$detail === "detail") {
			return css`
				margin-top: 50px;
				width: 900px;
			`;
		}
		return css`
			width: 550px;
		`;
	}}
`;

export const CommentNameDateBox = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 50px;
	font-size: ${(props) => (props.$detail === "detail" ? "30px" : "none")};
	margin-bottom: ${(props) => (props.$detail === "detail" ? "30px" : "none")};
`;

export const DetailTextarea = styled.textarea`
	min-height: 150px;
	border-radius: 10px;
	font-size: 23px;
	padding: 15px;
	resize: none; // 수정시 textarea 크기 수정불가하도록
`;

export const CommentContent = styled.p`
	${(props) => {
		if (props.$detail !== "detail") {
			return css`
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			`;
		}
		return css`
			line-height: 2.5rem;
			font-size: 23px;
		`;
	}}
`;
