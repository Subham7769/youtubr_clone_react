import React, { useState,useEffect } from 'react'
import Context from "./Context";
import axios from 'axios';


const ContextProvider = (props) => {

    const [searchQuery,setSearchQuery] = useState('latest');
    const [dataItems,setDataItems] = useState(null);
    const [currentVideoId,setCurrentVideoId] = useState(null);
    const [currentDataItem,setCurrentDataItem] = useState(null);

    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;




    async function fetchVideo() {
      const maxResults = 15;
      console.log("Fetching video");
      console.log(API_KEY);
      try {
        console.log(searchQuery)
        const { data } = await axios.get(`${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);
        const itemsWithDetails = await Promise.all(
          data?.items?.map(async (item) => {
            let VideoStats = getVideoStats(item?.id?.videoId);
            let contentDetails = getContentDetails(item?.id?.videoId);
            let ChannelLogo = getChannelLogo(item?.snippet?.channelId);
            const results = await Promise.all([VideoStats, contentDetails, ChannelLogo]);
            item.VideoStats = results?.[0];
            item.contentDetails = results?.[1];
            item.ChannelLogo = results?.[2];
            return item;
          })
        );
        setDataItems(itemsWithDetails);
        setCurrentVideoId(itemsWithDetails[0]?.id?.videoId);
        console.log(itemsWithDetails);
        localStorage.setItem('data', JSON.stringify(itemsWithDetails));
        // setDataItems(JSON.parse(localStorage.getItem('data')));
        console.log("Fetching video Successful!");
      } catch (error) {
        console.log("this is the error in fetching the Data in API call-> " + error);
      }
    }

      async function getVideoStats(videoId) {
        try {
          const { data } = await axios.get(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
          const stats = data.items;
          // console.log("getVideoStats "+stats);
          return stats;
        } catch (error) {
          console.log("getVideoStats "+error);
        }
      }

      async function getContentDetails(videoId) {
        try {
          const {data} = await axios.get(`${BASE_URL}/videos?id=${videoId}&part=contentDetails&key=${API_KEY}`);
          // console.log("getContentDetails "+data);
          return data;
        } catch (error) {
          console.log("getContentDetails "+error)
        }
      }

      async function getChannelLogo(channelId) {
        try {
          const {data} = await axios.get(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelId}`);
          // console.log("getChannelLogo "+data);
          return data;
        } catch (error) {
          console.log("getChannelLogo "+error)
        }
      }


    useEffect(()=>{fetchVideo()},[searchQuery])


      

  return (
    <Context.Provider value={{BASE_URL,API_KEY,setSearchQuery,dataItems,setDataItems,currentVideoId,setCurrentVideoId,currentDataItem,setCurrentDataItem}}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;
