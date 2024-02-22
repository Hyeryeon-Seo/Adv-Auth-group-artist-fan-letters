import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/modules/authSlice";

function Header() {
	const dispatch = useDispatch();

	const handleLogoutLink = () => {
		dispatch(logout());
	};

	return (
		<header>
			<h1>Send 💌 Your Love 💌 to &nbsp; a e s p a</h1>
			{/* TODO 시간 뜨게 하기? */}
			<HeaderTextBox>
				<HeaderLink Link to="profile">
					{/* id 넣은 프로필주소로 변경하기 */}내 프로필
				</HeaderLink>
				<HeaderLink Link to="login" onClick={() => handleLogoutLink()}>
					{/* ()해야 함수실행 잊지말기 */}
					로그아웃
				</HeaderLink>
			</HeaderTextBox>
		</header>
	);
}

export default Header;

const HeaderTextBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
	margin-right: 30px;
`;

const HeaderLink = styled(Link)`
	text-decoration: none;
	font-family: "Pretendard-Regular";
	font-weight: bold;
	font-size: 18px;
	color: black;
	&:hover {
		color: var(--subcolor);
		transition: 0.3s;
	}
`;
