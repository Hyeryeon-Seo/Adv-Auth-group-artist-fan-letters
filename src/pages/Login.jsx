import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setAuth } from "../redux/modules/authSlice";
import axios from "axios";
import { postLoggedinUser, postRegisteredUser } from "../api/jwt-api";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// console.log(userAuth);

	const [signUpUi, setSignUpUi] = useState(false); // 기본 false: 로그인 창
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [nickname, setNickname] = useState("");

	// postLoggedinUser({ id: "developer", password: "developer" });

	const onToggleLoginSignUp = () => {
		// useState사용해서 로그인 / 회원가입 창 토글/전환 시키기
		setSignUpUi(!signUpUi);
		// console.log(signUpUi);
	};

	// 로그인 버튼 클릭 시
	const onSubmitLogin = async (e) => {
		e.preventDefault();

		// axios사용, 서버에..
		// const response = await axios.post(
		// 	`${SERVER_API_URL}/login`,
		// 	{ id, password },
		// 	{
		// 		withCredentials: true,
		// 	}
		// );

		postLoggedinUser({ id, password });

		// NOTE 로그인 성공 시 로그인 상태 변경 -> 홈화면 이동
		// +추가하기!
		dispatch(setAuth(true));
		navigate("/");
	};

	// 회원가입 버튼 클릭 시
	const onSubmitSignUp = (e) => {
		e.preventDefault();

		if (!nickname) {
			// input에서 최소1글자 안먹혀서 여기서 유효성검사
			return alert("닉네임을 입력해주세요!");
		}

		postRegisteredUser({
			// JWT - api
			id,
			password,
			nickname, //단축속성명
			// 혹시나해서 "id" : id 해봤지만 상관 x (""는 json이라그런거고 어쩌피 넣을때객체?)
		});

		// 회원가입에 성공할 시 (response.data 완료메세지받음) 로그인 모드로 전환
		alert("회원가입에 성공했습니다!");
		setSignUpUi(false);
		// failed 메세지 뜨는 경우 (이미 기존 가입한 경우 등)
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
