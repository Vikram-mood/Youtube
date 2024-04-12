import React from 'react'

import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice"

const Header = () => {

    const dispatch=useDispatch()
    const handleToggle=()=>{
        // console.log("clicked");
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-md'>
            <div className='flex col-span-1 '>
                <img className='h-8 cursor-pointer' onClick={handleToggle} alt="menu-logo" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>

                <img className='h-8 mx-2'  alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
            </div>

            <div className='col-span-10 text-center'>
                <input type='text' className='w-6/12 border border-gray-400 h-8 rounded-l-full' ></input>
                <button className='border  border-gray-900 h-8 rounded-r-full bg-gray-100'>Search</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            </div>
            

        </div>
    )
}

export default Header;
