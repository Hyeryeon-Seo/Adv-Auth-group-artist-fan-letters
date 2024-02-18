// vite의 main.jsx-  CRA의 index.js와 같은 기능?
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import { Provider } from "react-redux"; // 프로바이더 컴포넌트가져오기
import store from "./redux/config/configStore";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
		<GlobalStyle />
	</Provider>
);
