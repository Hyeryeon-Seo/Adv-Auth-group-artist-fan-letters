import React from "react";
import * as S from "styles/VideoSectionStyle";

function VideoSection() {
	return (
		<S.VideoSection className="video_bg">
			<S.Iframe
				src="https://www.youtube.com/embed/Os_heh8vPfs?autoplay=0&mute=1;&loop=1&playlist=Os_heh8vPfs"
				title="aespa에스파 Spicy MV"
				// TODO 나중에 autoplay=1로 수정해서 완성할 것!!
				frameborder="0" // 유튭표시할떄 외곽선값 (0)
				allowfullscreen // 전체화면모드 허용여부
			>
				{/* 해당 브라우저에서 동영상을 지원하지 않습니다. */}
			</S.Iframe>
		</S.VideoSection>
	);
}

export default VideoSection;
