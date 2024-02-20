import styled from "styled-components";

export const LayoutDiv = styled.div`
	// Home,Detail 페이지
	min-width: 1500px;
	margin: 0%;
	display: flex;
	flex-direction: column;
	align-items: center; // 가로가운데정렬 (column과 쌍)
`;
export const DetailAvaterImg = styled.img`
	width: 250px;
`;

export const DetailBtn = styled.button`
	width: 200px;
	height: 50px;
	background-color: var(--maincolor);
	font-size: 20px;
	&:hover {
		background-color: yellow;
		color: black;
	}

	margin: ${(props) =>
		props.$homebtn === "homebtn" ? "30px auto 70px 1250px" : "none"};
`;

export const DetailBtnBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 80px;
	margin-bottom: 180px;
`;
