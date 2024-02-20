export const getFormattedDate = (date) =>
	new Date(date).toLocaleDateString("ko-KR", {
		year: "2-digit",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	});

// 받은 인자 (date) 를 문자열로 변환해주기
// home페이지의 commentitem에서도, detail페이지에서도 사용할 것
