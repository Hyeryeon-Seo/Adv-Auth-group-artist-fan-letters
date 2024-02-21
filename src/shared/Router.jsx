import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="detail/:id" element={<Detail />} />
					<Route path="login" element={<Login />} />
					<Route path="profile/:userId" element={<Profile />} />
					{/* 개개인 식별가능한 id를 param으로 */}
					<Route
						path="*"
						element={
							<>
								<h1>NOT FOUND</h1>
								<Link to={"/"}>Home</Link>
							</>
						}
					/>
					{/* <Route path="*" element={<Navigate replace to="/" />} /> */}
					{/*그 외 다른 path name이 url에 온 경우(*) 홈으로 이동(redirect)시키기 : Navigate사용 */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
