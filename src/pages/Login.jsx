import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setAuth } from "../redux/modules/authSlice";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const userAuth = useSelector((state) => state.auth.isLogin); // 지정한 name으로 부르기
	// console.log(userAuth);

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	// useState사용해서 로그인 / 회원가입 창 토글/전환 시키기
	const [signUpUi, setSignUpUi] = useState(false); // 기본 false: 로그인 창

	const onToggleLoginSignUp = () => {
		setSignUpUi(!signUpUi);
		// console.log(signUpUi);
	};

	const onSubmitLogin = (e) => {
		e.preventDefault();

		// NOTE 로그인 성공 시 로그인 상태 변경 -> 홈화면 이동
		// +추가하기!
		dispatch(setAuth(true));
		navigate("/");
	};

	const onSubmitSignUp = (e) => {
		e.preventDefault();

		// 회원가입에 성공할 시 로그인 모드로 전환
		alert("회원가입에 성공했습니다!");
		setSignUpUi(false);
	};

	return (
		<div>
			<LoginWrapper>
				<HomeBtn onClick={() => navigate("/")}>&larr; HOME</HomeBtn>
				{!signUpUi ? ( // 로그인 / 회원가입 토글
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
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								placeholder="비밀번호를 입력해주세요."
							/>
							<button type="submit">로그인</button>
							<RegisterText onClick={() => onToggleLoginSignUp()}>
								{/* 함수뒤에 ()넣어야 실행됨 ..!*/}
								회원가입
							</RegisterText>
						</LogInForm>
					</>
				) : (
					<LogInForm onSubmit={onSubmitSignUp}>
						<Title>회원 가입</Title>
						<input
							type="text"
							placeholder="아이디 (4 ~ 10 글자)"
							minLength={4}
							maxLength={10}
						/>
						<input
							type="password"
							placeholder="비밀번호 (4 ~ 15 글자)"
							minLength={4}
							maxLength={15}
						/>
						<input
							type="text"
							placeholder="닉네임 (1 ~ 10 글자)"
							minLength={1}
							maxLength={10}
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
	font-size: 20px;
	/* border: 1px solid var(--subColor2); */
	border: 0;
	background-color: var(--mainColor);
	/* color: var(--subColor2); */
	border-radius: 15px;
	width: 100px;
	padding: 5px;
	margin-top: 10px;
	margin-left: 10px;
	/* box-shadow: 0px 0px 3px 1px var(--subColor2); */
	cursor: pointer;
	&:hover {
		color: var(--mainColor);
		transition: all 0.3s;
	}
`;

const Title = styled.p`
	font-size: 20px;
	/* color: var(--subColor1); */
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
