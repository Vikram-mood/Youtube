import React from 'react'

import {useSelector} from "react-redux"
import { Link,useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SideBar=()=>{

    const isMenuOn=useSelector((store)=>store.app.isMenuOn);
    const location = useLocation()
    

    
  
    // console.log(location.pathname)
    if (isMenuOn===false) return null;
    const sidebarClass = ` p-8 pt-3 shadow-lg w-60 bg-white ${location.pathname.includes('/watch') ? `fixed ` : null} `;

    return (
        <div className={ sidebarClass} > 
            <ul className='mb-3'>
                <Link to="/">
                <li className='py-3 font-bold cursor-pointer'>
                <i className="fa fa-home mr-3" aria-hidden="true"></i>Home</li> 
                </Link>
                <li className='py-3 cursor-pointer'>
                <i className=' fa fa-play mr-3' aria-hidden="true"></i>Shorts</li>
                <li className="py-3 cursor-pointer">
               Subscriptions</li>
                
            </ul>
            
            <ul className='mb-3 mt-2'>
            <li className="py-3 cursor-pointer">Library</li>

            <li className="py-3 cursor-pointer">History</li>
                
            <li className="py-3 cursor-pointer">Your Videos</li>
                
            <li className="py-3 cursor-pointer">Watch later</li>
                
            <li className="py-3 cursor-pointer">Liked Videos</li>
                
                
            </ul>
            <h1 className="mt-3 mb-3 font-semibold">Explore</h1>
        <ul>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-fire mr-3" aria-hidden="true"></i>Trending
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-shopping-bag mr-3" aria-hidden="true"></i>
            Shopping
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-music mr-3" aria-hidden="true"></i>Music
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-film mr-3" aria-hidden="true"></i>Movies
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-podcast mr-3" aria-hidden="true"></i>Live
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-gamepad mr-3" aria-hidden="true"></i>Gaming
          </li>
          <li className="py-3 cursor-pointer">
            <i className="fa fa-trophy mr-3" aria-hidden="true"></i>Sports
          </li>
        </ul>
            

        </div>
    )
}

export default SideBar
