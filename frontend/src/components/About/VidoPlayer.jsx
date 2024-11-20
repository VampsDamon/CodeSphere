import React from 'react'
import introVideo from "../assets/videos/intro.mp4";
const VidoPlayer = () => {
  return (
    <div className="vdoContainer">
      <video
        autoPlay
        muted
        loop
        src={introVideo}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      />
    </div>
  );
}

export default VidoPlayer