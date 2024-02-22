import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/modules/authSlice";
import { postLoggedinUser, postRegisteredUser } from "../api/jwt-api";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isLoginMode, setIsLoginMode] = useState(true); // 기본 true: 로그인 창
	// TODO id,pwd,nick.. 세 state 한꺼번에 객체형태로 state만들기?
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [nickname, setNickname] = useState("");

	const onToggleLoginSignUp = () => {
		// useState사용해서 로그인 / 회원가입 창 토글/전환 시키기
		setIsLoginMode(!isLoginMode);
	};

	// NOTE 로그인 버튼 클릭 시
	const onSubmitLogin = async (e) => {
		// * 여기에도 async await 써주기!
		e.preventDefault();
		// JWT - api - 로그인
		try {
			const data = await postLoggedinUser(id, password);
			console.log(data);
			const { accessToken, avatar, nickname, userId } = data; // 구분할
			console.log(accessToken, avatar, nickname, userId);
			// NOTE 로그인 성공 시 로그인 상태 변경 & 홈화면 이동
			if (data.success) {
				dispatch(login({ accessToken, avatar, nickname, userId }));
				alert("로그인 되었어요! 팬레터 쓰러 가보실까요? ♡⸜(˶˃ ᵕ ˂˶)⸝♡");
				navigate("/");
			}
		} catch (err) {
			alert(err.response.data.message + " ㅠ_ㅠ 다시 시도해주세요!"); // 서버로부터 오는 에러메세지 뜨게하기
		}
	};

	// NOTE 회원가입 버튼 클릭 시
	const onSubmitSignUp = async (e) => {
		e.preventDefault();
		// JWT - api - 회원가입
		try {
			const data = await postRegisteredUser(id, password, nickname); // ,마지막에 붙여 에러남
			// 회원가입 성공 시 로그인 모드로 전환
			if (data.success) {
				setIsLoginMode(true);
				// TODO 폼 리셋시키는 방법 바꾸기
				setId(""); // 안해주면 토글되어도,혹은 다시 회원가입창가도 그대로 떠있다
				setPassword("");
				setNickname("");
				alert("회원가입에 성공했어요! 로그인 해주세요 ~ ( ˶ˆ ᗜ ˆ˵ )");
			}
		} catch (err) {
			alert(err.response.data.message + " ㅠ_ㅠ 다시 시도해주세요!");
		}
	};

	return (
		<div>
			<LoginWrapper>
				<HomeBtn onClick={() => navigate("/")}>&larr; HOME</HomeBtn>
				{isLoginMode ? ( // 로그인 / 회원가입 토글
					<>
						<LogInForm onSubmit={onSubmitLogin}>
							<Title>로그인</Title>
							<input
								type="text"
								value={id}
								onChange={(e) => {
									setId(e.target.value);
								}}
								placeholder="아이디를 입력해주세요."
								required
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								placeholder="비밀번호를 입력해주세요."
								required
							/>
							<button type="submit">로그인</button>
							<SignUpText onClick={() => onToggleLoginSignUp()}>
								{/* 함수뒤에 ()넣어야 실행됨 ..!*/}
								회원가입
							</SignUpText>
						</LogInForm>
					</>
				) : (
					<LogInForm onSubmit={onSubmitSignUp}>
						<Title>회원 가입</Title>
						<input
							type="text"
							value={id} // 로그인 input의 value id와 같아도?
							onChange={(e) => {
								setId(e.target.value);
							}}
							placeholder="아이디 (4 ~ 10 글자)"
							minLength={4}
							maxLength={10}
							required
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder="비밀번호 (4 ~ 15 글자)"
							minLength={4}
							maxLength={15}
							required
						/>
						<input
							type="text"
							value={nickname}
							onChange={(e) => {
								setNickname(e.target.value);
							}}
							placeholder="닉네임 (1 ~ 10 글자)"
							minLength={1} // 2부턴 먹히는데 1은 안먹힘 (아무것도입력안해도되는문제->우선 onsubmit함수에 유효성검사)
							maxLength={10}
							required
						/>
						<button type="submit">회원 가입</button>
						<SignUpText onClick={() => onToggleLoginSignUp()}>
							로그인
						</SignUpText>
					</LogInForm>
				)}
			</LoginWrapper>
		</div>
	);
};

export default Login;

const LoginWrapper = styled.div`
	background-color: var(--mainColor);
	min-height: 870px;
`;

const LogInForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: auto;
	gap: 20px;
	width: 500px;
`;

const HomeBtn = styled.button`
	font-size: 25px;
	background: none;
	margin-top: 30px;
	margin-left: 30px;
	cursor: pointer;
	&:hover {
		color: var(--maincolor);
		transition: all 0.3s;
	}
`;

const Title = styled.p`
	font-size: 20px;
	width: 200px;
	margin: 0 auto;
	text-align: center;
`;

const SignUpText = styled.span`
	color: var(--subcolor);
	& {
		cursor: pointer;
	}
`;
