import React from 'react'

import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const SideBar=()=>{

    const isMenuOn=useSelector((store)=>store.app.isMenuOn);
    if (isMenuOn===false) return null;

    return (
        <div className='shadow-lg w-40 m-2 p-2'> 
            <ul>
                <Link to="/"><li>Home</li> </Link>
                <li>Shorts</li>
                <li>Subscription </li>
            </ul>
            <h1 className='mt-2 font-bold'>You</h1>
            <ul>
                <li>History</li>
                <li>Watch Later</li>
                <li>Playlists   </li>
                <li>fgdshajgeyhauyjbs</li>
            </ul>
            <h1 className='mt-2 font-bold'>Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shoping</li>
                <li>Music</li>
            </ul>

        </div>
    )
}

export default SideBar
