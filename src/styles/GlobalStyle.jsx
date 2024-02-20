import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// 전역 스타일링에서 -> 구역 사이즈 적용 (body, header, footer ..)
// 폰트 이후 수정할 수

// reset.css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
	font-family: "Pretendard-Light";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
		format("woff");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Regular";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
		format("woff");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Bold";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
		format("woff");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Black";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
		format("woff");
	font-weight: 900;
	font-style: normal;
}

:root {
  --maincolor : #b86fb8;
  --subcolor: #dfdfaa;
}

	body {
        color: black;
	    background-color: #0e0d0d;
		min-height: 1000px;
		font-family: "Pretendard-Regular";
		box-sizing: border-box;
    } 

	* {
		font-family: "Pretendard-Regular";
	}

    header {
		width: 100%;
        height: 50px; 
		/* margin-top: 30px; */
		padding-top: 10px;
		padding-bottom:10px;
		background-color: var(--maincolor);
		display: flex;
		align-items: center;
		justify-content: space-between;
    }
	
	h1 { // 헤더 제목
		font-size: 35px;
		font-family: "Pretendard-Black";
		padding-left: 20px;
		color: var(--subcolor);
	}

	h2 { // section의 제목 (Write&Send 등)
		font-family: "Pretendard-Black";
		font-size: 50px;
		margin: 0px auto 10px 100px;
		padding-top: 40px;
	}
	
	/* h3 { // '내 프로필', '로그아웃'
		font-family: "Pretendard-Regular";
		font-weight: bold;
		font-size: 18px;
	} */

	 nav > ul {   
		display: flex;
		justify-content: space-around;
	}

	nav > ul > li { // nav에 속하는 li
		display: flex;
		justify-content: center; 
		padding: 20px;
		margin: 20px auto 20px auto;
	}


	 form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 30px;
	background-color: #000000;
	margin-top: 5dpx;
	width: 600px;
	height: 530px;
	color: var(--subcolor);
	border-radius: 3cm;
	font-size: 20px;
	} 

	input {
		background-color: black;
		color: white;
		width: 300px;
		height: 40px;
		margin-top: 15px;
		/* border: 1px solid #333030; */
		/* border: none; */
		font-size: 20px;
		/* text-underline-offset: 0.5rem; */
		outline: none;
		 border-width: 0px 0px 1px;
		 border-color: var(--maincolor);
	}

	select {
		width: 100px;
		height: 40px;
		border: none;
		border-radius: 10px;
		font-size: 20px;
		font-weight: bold;
		box-shadow: 0px 0px 10px 0px yellow;
		color:white;
		background-color: black;
		padding-left: 20px;
	}

	button { 
	background-color: rgb(0, 0, 0);
	border: none;
	margin-top: 10px;
	font-size: medium;
	border-radius: 10px;
	color: white;
	font-family: "Pretendard-Regular";
	cursor: pointer;
	font-weight: bold;
	}

	form > button {
		width: 150px;
		height: 50px;
		margin-top: -5px;
		margin-bottom: 20px;
		background-color: var(--maincolor);
		&:hover {
		background-color: yellow;
		color:black;
		transition: 0.3s;

		}
	}

	article {
		color:white;
		display: flex;
		flex-direction: column;
	}

	img {
		border-radius: 50%; // 원모양
	}

	footer {
		height: 30px;
		padding-top: 50px;
		padding-bottom: 30px;
		color: #a184aa;
		font-family: "Pretendard-Light";
	}
    `;

export default GlobalStyle;
