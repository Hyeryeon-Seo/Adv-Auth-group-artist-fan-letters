import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
	display: flex;
`;

const InputText = styled.div`
	font-size: medium;
	/* font-weight: bold; */
	margin-right: 15px;
	margin-top: 25px;
`;

function CustomInput(props) {
	// props사용해 전달받음
	const { children, name, type, value, onChange, placeholder } = props;
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				maxlength="20" // 글자수제한 최대20자
			/>
		</InputBox>
	);
}

export default CustomInput;
