import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";
import * as S from "styles/PagesStyle";
import { CommentContext } from "../context/CommentContext";

function Detail() {
	const context = useContext(CommentContext);
	const { id } = useParams();

	const selectedComment = context.commentList.find(
		(comment) => comment.id === id
	);

	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/");
	};

	// 삭제버튼
	// 둘다 set해줘야 잘 적용됨 -> 이렇게 하는게 맞나
	const deleteCommentHandler = (id) => {
		if (window.confirm("정말 삭제하실 건가요?")) {
			context.setCommentList((prevCommentList) =>
				prevCommentList.filter((comment) => comment.id !== id)
			);
			alert("팬레터가 삭제되었습니다");
			// 홈화면으로 이동
			navigate("/");

			context.setFilteredByMemList((prevCommentList) =>
				prevCommentList.filter((comment) => comment.id !== id)
			); // 엇 메인에서와다르게 이거없어도 삭제 잘 먹히는거같은데?
			// 아래에서 화면이동하면서 자연스럽게 리렌더링?되어서인듯!
			//(Home에서는, setCommentList만해줄경우 바로화면에서 삭제안되고 남아있었다가 다른거 클릭하고 넘어와야 사라졌음)
			// BUT 컴포넌트분리후에 그런건지, Home페이지에서 삭제안되어있음 & 홈화면이동을 setFiltered..위에 써줘야 작동하게되었다 (바뀜)
		}
	};

	return (
		<S.LayoutDiv>
			<Header></Header>
			<button onClick={handleHomeClick}>Home</button>
			<article>
				<S.DetailAvaterImg src={selectedComment.avatar}></S.DetailAvaterImg>
				<h3>{selectedComment.nickname}</h3>
				<time>{selectedComment.createdAt}</time>
				<p>To. {selectedComment.writedTo} </p>
				<p>{selectedComment.content}</p>
				<button>수정</button>
				<button onClick={() => deleteCommentHandler(id)}>삭제</button>
			</article>
			<Footer></Footer>
		</S.LayoutDiv>
	);
}

export default Detail;
