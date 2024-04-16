import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import {Outlet} from "react-router-dom";
import Header from './Header';

const Body=()=> {
    return (
        <>

            <Header />
            <div className='flex pt-20'  >
            
            <SideBar />
            <Outlet />
            {/* <MainContainer /> */}
            
        </div>
        </>
    )
}

export default Body
