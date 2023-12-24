import React, { useContext } from "react";
import Context from "../../context/Context";

const VideoContainer = () => {
  const { dataItems } = useContext(Context);

console.log(dataItems);

// console.log(dataItems[0].contentDetails.items);


  function durationConverter(duration) {
    if (duration === 'P0D') {
        return 'Live'; // Return 'Live' for the specific case of 'P0D'.
      }
    // Define a regular expression pattern to match hours, minutes, and seconds.
    const pattern = /PT(\d+H)?(\d+M)?(\d+S)?/;
  
    // Use regular expressions to extract hours, minutes, and seconds from the input string.
    const matches = duration.match(pattern);
  
    if (!matches) {
      return null; // Return null for invalid input.
    }
  
    // Extract hours, minutes, and seconds from the matches.
    const hours = matches[1] ? parseInt(matches[1].slice(0, -1)) : 0;
    const minutes = matches[2] ? parseInt(matches[2].slice(0, -1)) : 0;
    const seconds = matches[3] ? parseInt(matches[3].slice(0, -1)) : 0;
  
    if (hours < 1 && minutes < 1 && seconds < 1) {
      return 'Live'; // If no time components are present, return 'Live'.
    }
  
    let formattedTime = '';
  
    if (hours > 0) {
      formattedTime += hours.toString().padStart(2, '0') + ':';
    }
  
    formattedTime += minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  
    return formattedTime;
  }

  function videoViewsFormator(videoViews) {
    const num = parseFloat(videoViews);
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + " B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + " M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + " k";
    }
    return num;
  }

  function timeAgo(videoUploaded) {
    const currentTime = new Date();
    const publishDate = new Date(videoUploaded);
    const timeDifference = currentTime - publishDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  }


  return (
    <div id="videoContainer">
      <div id="videos">
        {/* All Videos */}
        {dataItems &&
          dataItems.map((item) => {
            
            
              return (
              <div className="card2" >
                <div>
                  <img
                    src={item.snippet.thumbnails.default.url}
                    alt="videoThumbnail"
                    className="card-img-top"
                  />
                </div>
                <div className="cardBody">
                  <span className="" id="videoDuration">
                  {/* {item.contentDetails.items && item.contentDetails.items.length > 0 ? durationConverter(item.contentDetails.items[0].contentDetails.duration) : 'N/A'} */}
                  </span>
                  <div className="channelImage">
                    <img
                      // src={item.ChannelLogo.items[0].snippet.thumbnails.default.url}
                      alt="channelThumbnail"
                      className="channelThumbnail"
                    />
                  </div>
                  <div className="videoDetails">
                    <h5 className="card-title" id="channelTitle">{item.snippet.title }</h5>
                    <p className="card-subtitle text-dark">
                      <span>
                      {item.VideoStats && item.VideoStats[0] && item.VideoStats[0].statistics ? videoViewsFormator(item.VideoStats[0].statistics.viewCount) : 'N/A'}{"  views"}
                      </span>
                      . <span>{timeAgo(item.snippet.publishTime)}</span>
                    </p>
                  </div>
                </div>
              </div>)
              

       

          })}
      </div>
    </div>
  );
};

export default VideoContainer;
