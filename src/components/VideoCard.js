import React from 'react'

const VideoCard = ({info}) => {

 const {snippet,statistics}=info;
 const {channelTitle,title,thumbnails}=snippet
 const {viewCount}=statistics;
    // console.log(info)

    const watchVideo=()=>{
        console.log("clicked")
    }
    
    return (
        <div className='p-2 m-2 w-64 shadow-lg rounded-md cursor-pointer' onClick={(watchVideo)}>
            <img className='rounded-lg' alt="video-img" src={thumbnails.medium.url}/>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
            
        </div>
    )
}

export default VideoCard;
