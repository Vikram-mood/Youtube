import React, { useEffect, useState } from 'react'
import { VIDEOS_API } from '../utils/constants';
import {Link} from "react-router-dom";

import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        const data=await fetch(VIDEOS_API);
        const json=await data.json();
        setVideos(json.items);
        // console.log(json.items);
    }
    return (
        <div className='flex flex-wrap'>
            {videos.map((video)=><Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video}/></Link>)}
            {/* <VideoCard info={videos[0]}/> */}
        </div>
    )
}
export default VideoContainer;
