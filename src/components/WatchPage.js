import React, { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch,useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import SideBar from './SideBar';

const WatchPage = () => {

    const dispatch = useDispatch();
    const menuOn=useSelector((store)=>store.app.isMenuOn)
    const [searchParam] = useSearchParams();
    // console.log(searchParam.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    
    return (
        <div className='flex flex-col w-full'>
        
            <div className='px-4 m-4 flex '>
                <div>
                    <iframe width="900" height="500"
                        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                    </iframe>
                </div>
                <div className='ml-2 border '>
                    <LiveChat />
                </div>
            </div>
            <div className=' m-4 p-2 w-[930px]'>
                <CommentContainer />
            </div>
        </div>
    )
}
export default WatchPage;