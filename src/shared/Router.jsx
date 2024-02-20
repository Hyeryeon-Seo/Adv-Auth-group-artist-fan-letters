import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // pages/Home 절대경로설정됨
import Detail from "pages/Detail";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="detail/:id" element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
