import React from "react";
import Header from "../components/layout/Header";
import VideoSection from "../components/layout/VideoSection";
import FormSection from "../components/layout/FormSection";
import CommentList from "../components/comment/CommentList";
import Footer from "../components/layout/Footer";
import * as S from "styles/PagesStyle";
import useNavigateLogin from "../hooks/useNavigateLogin";

function Home() {
	// custom hook 사용 - 로그인 안한 상태일 시 로그인페이지로 이동
	useNavigateLogin(); // ()써줘야 실행

	return (
		<S.LayoutDiv>
			<Header />
			<VideoSection />
			<FormSection />
			<CommentList />
			<Footer />
		</S.LayoutDiv>
	);
}

export default Home;
