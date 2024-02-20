import React from "react";
import Header from "../components/layout/Header";
import VideoSection from "../components/layout/VideoSection";
import FormSection from "../components/layout/FormSection";
import CommentList from "../components/comment/CommentList";
import Footer from "../components/layout/Footer";
import * as S from "styles/PagesStyle";

function Home() {
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
