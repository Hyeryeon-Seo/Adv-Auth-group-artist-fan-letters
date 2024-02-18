import React from "react";
import * as S from "styles/FormSectionStyle";
import CommentForm from "../comment/CommentForm";

function FormSection() {
	return (
		<S.FormSection>
			<h2>Write & Send</h2>
			<S.ImgFormBox>
				<S.ArtistImg src="src\assets\aespaGroupImage.jpg"></S.ArtistImg>
				{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
				<CommentForm></CommentForm>
			</S.ImgFormBox>
		</S.FormSection>
	);
}

export default FormSection;
