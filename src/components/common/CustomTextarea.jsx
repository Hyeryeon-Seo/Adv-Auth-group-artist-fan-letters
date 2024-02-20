import React from "react";
import styled from "styled-components";

function CustomTextarea(props) {
	const { children, name, type, value, onChange, placeholder, maxLength } =
		props;
	return (
		<TextareaBox>
			<TextareaText>{children}</TextareaText>
			<Textarea
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				maxLength={maxLength} // 글자수제한
			/>
		</TextareaBox>
	);
}

export default CustomTextarea;

// 같은 파일내부 styled-components 적용
const TextareaBox = styled.div`
	display: flex;
`;

const TextareaText = styled.div`
	font-size: 20px;
	/* font-weight: bold; */
	margin-right: 15px;
	margin-top: 25px;
`;

const Textarea = styled.textarea`
	background-color: black;
	color: white;
	width: 450px;
	height: 200px;
	border: 1px solid #333030;
	border-radius: 5px;
	font-size: 20px;
	margin-left: 30px;
	outline: none;
	/* border-width: 0px 0px 1px; */
	border-color: var(--maincolor);
`;
