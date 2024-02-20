import React from "react";

const Profile = () => {
	// custom hook 사용 - 로그인 안한 상태일 시 로그인페이지로 이동
	useNavigateLogin();

	return <div>Profile</div>;
};

export default Profile;
