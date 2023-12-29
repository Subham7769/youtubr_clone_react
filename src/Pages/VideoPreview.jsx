import React,{useContext} from 'react'
import Context from '../context/Context'
import Navbar from '../Components/Navbar/Navbar'
import '../video.css'
import VideoPlayer from '../Components/VideoPreviewSection/VideoPlayer'
import VideoStats from '../Components/VideoPreviewSection/VideoStats'
import CommentSection from '../Components/VideoPreviewSection/CommentSection'
import SuggestedVideos from '../Components/VideoPreviewSection/SuggestedVideos'

const VideoPreview = () => {
    const {dataItems,currentVideoId} = useContext(Context)
  return (
    <>
        <Navbar/>
        <div className='main'>
        <div id="videoPreviewSection">
          <VideoPlayer/>
          <VideoStats/>
          <CommentSection/>
        </div>
          <SuggestedVideos/>
        </div>
    </>
  )
}

export default VideoPreview