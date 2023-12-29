import React,{useContext} from 'react'
import Context from '../../context/Context'
import {durationConverter,countFormator,timeAgo} from '../DataFormator/DataFormator';
import { FaShare  } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";







const VideoStats = () => {
    const {currentDataItem} = useContext(Context);
    console.log(currentDataItem);
  return (
    <div id="video_channelDetails">
        <h4 id="videoTitle">{currentDataItem.snippet.title}</h4>
        <div id="videoDetails">
            <span id="videoStats1">
            <span id="viewsCount"> {countFormator(currentDataItem.VideoStats[0].statistics.viewCount)} views</span>
             . <span id="videoDate"> {timeAgo(currentDataItem.snippet.publishTime)}</span>
            </span>
            <span id="videoStats2">
                <span id="likes"><AiFillLike style={{color:"white", fontSize:"1rem"}} /><span>{countFormator(currentDataItem.VideoStats[0].statistics.likeCount)}</span></span>
                <span id="dislikes"><AiFillDislike style={{color:"white", fontSize:"1rem"}} /><span>{countFormator(currentDataItem.VideoStats[0].statistics.dislikeCount)}</span></span>
                <span id="share"><FaShare style={{color:"white", fontSize:"1rem"}}/><span>SHARE</span></span>
                <span id="save"><FaRegPlusSquare style={{color:"white", fontSize:"1rem"}}/><span>SAVE</span></span>
                <span id="more"><MdMoreHoriz style={{color:"white", fontSize:"1rem"}}/></span>
            </span>
        </div>
        
        <div  id="channelDetails">
            <div id="channelThumbnailContainer">
                <img src={currentDataItem.ChannelLogo.items[0].snippet.thumbnails.default.url} alt="channelThumbnail" id="channelThumbnail"/>
            </div>
            <div id="channelDetailsContainer">
                <div id="channelIntro">
                    <div>
                        <h4 id="channelName">{currentDataItem.snippet.channelTitle}</h4>
                        <p id="channelStats"><span>1.2 M subscriber</span></p>
                    </div>
                    <button class="Subscribe">Subscribe</button>
                </div>
                <p>{currentDataItem.ChannelLogo.items[0].snippet.description}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoStats