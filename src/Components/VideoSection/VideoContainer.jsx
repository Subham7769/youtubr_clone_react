import React, { useContext } from "react";
import Context from "../../context/Context";
import { Form, Link,useNavigate } from "react-router-dom";
import {durationConverter,countFormator,timeAgo} from '../DataFormator/DataFormator';

const VideoContainer = () => {

  const navigate = useNavigate();
  const { dataItems,setCurrentVideoId,setCurrentDataItem } = useContext(Context);

// console.log(dataItems);

// console.log(dataItems[0].contentDetails.items);

  return (
    <div id="videoContainer">
      <div id="videos">
        {/* All Videos */}
        {dataItems &&
          dataItems.map((item) => {
            
            
              return (

                  <div className="card2" key={item?.id?.videoId} onClick={()=>{
                    setCurrentVideoId(item?.id?.videoId);
                    setCurrentDataItem(item);
                    navigate('/VideoPreview');
                    }}>
                    <div>
                    <img src={item.snippet.thumbnails.default.url} alt="videoThumbnail" className="card-img-top"/>
                    </div>
                    <div className="cardBody">
                      <span className="" id="videoDuration">
                      {item.contentDetails.items && item.contentDetails.items.length > 0 ? durationConverter(item.contentDetails.items[0].contentDetails.duration) : 'N/A'}
                      </span>
                      <div className="channelImage">
                        <img
                          src={item.ChannelLogo.items[0].snippet.thumbnails.default.url}
                          alt="channelThumbnail"
                          className="channelThumbnail"
                        />
                      </div>
                      <div className="videoDetails">
                        <h5 className="card-title" id="channelTitle">{item.snippet.title }</h5>
                        <p className="card-subtitle text-dark">
                          <span>
                          {item.VideoStats && item.VideoStats[0] && item.VideoStats[0].statistics ? countFormator(item.VideoStats[0].statistics.viewCount) : 'N/A'}{"  views"}
                          </span>
                          . <span>{timeAgo(item.snippet.publishTime)}</span>
                        </p>
                      </div>
                    </div>
                  </div>

              )    

          })}
      </div>
    </div>
  );
};

export default VideoContainer;
