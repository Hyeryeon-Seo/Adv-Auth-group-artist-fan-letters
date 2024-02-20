import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// custom hook
const useNavigateLogin = () => {
	const navigate = useNavigate();
	const userAuth = useSelector((state) => state.auth.isLogin); // 지정한 name으로 부르기

	const navigateLogin = () => {
		if (!userAuth) {
			// 로그인 안한 상태일 시
			useEffect(() => {
				alert("로그인 해주세요!");
				navigate("/login");
			}, []);
		}
	};

	return navigateLogin(); // 위 함수 실행하는 것으로 반환   - ()써줘야 실행!
};

export default useNavigateLogin;
