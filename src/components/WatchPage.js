import React, { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import {useDispatch} from  "react-redux";
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch=useDispatch();

    const [searchParam]=useSearchParams();
    // console.log(searchParam.get("v"));
    
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return (
        <div className='px-4 m-4'>
            <iframe width="900" height="500" 
            src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe> 
        </div>
    )
}
export default WatchPage;