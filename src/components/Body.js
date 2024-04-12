import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import {Outlet} from "react-router-dom";


const Body=()=> {
    return (
        <div className='flex m-2 p2' >
            
            <SideBar />
            <Outlet />
            {/* <MainContainer /> */}
            
        </div>
    )
}

export default Body
