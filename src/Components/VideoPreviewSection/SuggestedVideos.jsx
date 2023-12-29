import React,{useContext} from 'react'
import Context from '../../context/Context'
import {durationConverter,countFormator,timeAgo} from '../DataFormator/DataFormator';



const SuggestedVideos = () => {

  const {dataItems,setCurrentVideoId,setCurrentDataItem} = useContext(Context);
  console.log(dataItems)

  return (
    <div id="suggestedSection">
      {dataItems && dataItems.map((item)=>{return(
        <div className="card1" onClick={()=>{
          setCurrentVideoId(item?.id?.videoId);
          setCurrentDataItem(item);}} >
            <img src={item.snippet.thumbnails.default.url} alt="videoThumbnail" id="videoThumbnail"/>
                         <div id="videoDetailsContainer">  
                          <span  id="videoDurationBadge">{durationConverter(item.contentDetails.items[0].contentDetails.duration)}</span>
                          <div className="d-flex flex-column justify-content-between  h-100 p-2" id="cardDetails">
                          <h5 className="card-title" id="videoTitle">{item.snippet.title}</h5>
                          <p className="card-subtitle" id="channelName">{item.snippet.channelTitle}</p>
                          <p className="card-subtitle text-white" id="channelStats">
                          <span>{countFormator(item.VideoStats[0].statistics.viewCount)} views</span> . <span>{timeAgo(item.snippet.publishTime)}</span></p>
                          </div>
                      </div>
        </div>)
      })}
    </div>
  )
}

export default SuggestedVideos