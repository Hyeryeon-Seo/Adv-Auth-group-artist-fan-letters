import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";

const Router = () => {
	const userAuth = useSelector((state) => state.auth.isLogin);
	console.log("userAuth ", userAuth);

	return (
		<>
			<BrowserRouter>
				<Routes>
					{userAuth ? (
						<>
							<Route path="/" element={<Home />} />
							<Route path="detail/:id" element={<Detail />} />
							<Route path="profile/:userId" element={<Profile />} />
							{/* 개개인 식별가능한 id를 param으로 */}
							<Route
								path="*"
								element={
									<>
										<h1>NOT FOUND</h1>
										<Link to={"/"}>Home</Link>
										{/*Link쓰니 경고떠서 (dom element에서 인식 x?) */}
									</>
								}
							/>
						</>
					) : (
						<>
							<Route path="login" element={<Login />} />
							<Route path="*" element={<Navigate replace to="/login" />} />
						</>
					)}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
