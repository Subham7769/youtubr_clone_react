import React, { useEffect,useContext } from 'react';
import Context from '../../context/Context';


function VideoPlayer() {
  const {currentVideoId} = useContext(Context);
  let player;

  useEffect(() => {
    // Ensure the YouTube IFrame API is loaded
    if (window.YT) {
      createPlayer();
    } else {
      // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createPlayer;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    return () => {
      // Clean up on unmount
      if (player && player.destroy) player.destroy();
    };
  }, [currentVideoId]);

  const createPlayer = () => {
    player = new window.YT.Player('videoContainer', {
      height: '100%',
      width: '100%',
      videoId: currentVideoId, // replace with your video id
      playerVars: {
        autoplay: 1,
        controls: 1,
        modestbranding: 1,
        showinfo: 1,
        mute: 0
      }
    });
  };

  return <div id="videoContainer" />;
}

export default VideoPlayer;
