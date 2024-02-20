import React from "react";
import styled from "styled-components";

function CustomInput(props) {
	// props사용해 전달받음
	const { children, name, type, value, onChange, placeholder } = props;
	return (
		<InputBox>
			<InputTitle>{children}</InputTitle>
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				maxLength="20" // 글자수제한 최대20자
			/>
		</InputBox>
	);
}

export default CustomInput;

const InputBox = styled.div`
	display: flex;
`;

const InputTitle = styled.div`
	font-size: 20px;
	/* font-weight: bold; */
	margin-right: 30px;
	margin-top: 25px;
`;
