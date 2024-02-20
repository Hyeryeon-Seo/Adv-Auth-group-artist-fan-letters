import React from "react";
import * as S from "styles/FormSectionStyle";
import CommentForm from "../comment/CommentForm";

function FormSection() {
	return (
		<S.FormSection>
			<h2>Write & Send</h2>
			<S.ImgFormBox>
				<S.ArtistImg
					// 외부주소로 변경 (vercel배포시 이미지안뜨는문제)
					src="https://smtown-cdn.smtown.com/upload/profile/web-detail/3bf7df3b42994b1ea223024f42548d43_2023-11-08-02-13-25.jpg"
					alt="aespa-image"
				/>
				{/*form태그 - 코멘트(팬레터) 입력, 등록하기*/}
				<CommentForm />
			</S.ImgFormBox>
		</S.FormSection>
	);
}

export default FormSection;
