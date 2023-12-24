import React, { useState,useEffect } from 'react'
import Context from "./Context";
import axios from 'axios';


const ContextProvider = (props) => {

    const [searchQuery,setSearchQuery] = useState('latest');
    const [dataItems,setDataItems] = useState(null);
    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = "AIzaSyDA0UFC-gFpphL3RRiZy26LV_h4DMI_O1g";




    async function fetchVideo() {
      const maxResults = 5;
      console.log("Fetching video");
      try {
        const { data } = await axios(`${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);
        data?.items?.map(async (item) => {
          let VideoStats = getVideoStats(item?.id?.videoId);
          let contentDetails = getContentDetails(item?.id?.videoId);
          let ChannelLogo = getChannelLogo(item?.snippet?.channelId);
          const results = await Promise.all([VideoStats, contentDetails, ChannelLogo]);
          item.VideoStats = results?.[0];
          item.contentDetails = results?.[1];
          item.ChannelLogo = results?.[2];
          return item;
        });
        setDataItems(data?.items);
        console.log(data.items);
        console.log("Fetching video Successful!");
      } catch (error) {
        console.log("this is the error in fetching the Data in API call-> " + error);
      }
    }

      async function getVideoStats(videoId) {
        try {
          const { data } = await axios(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`);
          const stats = data.items;
          console.log("getVideoStats "+stats);
          return stats;
        } catch (error) {
          console.log("getVideoStats "+error);
        }
      }

      async function getContentDetails(videoId) {
        try {
          const {data} = await axios(`${BASE_URL}/videos?id=${videoId}&part=contentDetails&key=${API_KEY}`);
          console.log("getContentDetails "+data);
          return data;
        } catch (error) {
          console.log("getContentDetails "+error)
        }
      }

      async function getChannelLogo(channelId) {
        try {
          const {data} = await axios(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelId}`);
          console.log("getChannelLogo "+data);
          return data;
        } catch (error) {
          console.log("getChannelLogo "+error)
        }
      }


    useEffect(()=>{fetchVideo()},[searchQuery])


      

  return (
    <Context.Provider value={{setSearchQuery,dataItems,setDataItems}}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;
