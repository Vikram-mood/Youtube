import React, { useEffect, useState } from 'react'

import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice"
import { Youtube_Search_API } from '../utils/constants';
import chatSlice from '../utils/chatSlice';
import { cacheResults } from '../utils/searchSlice';
import Search from './Search';

const Header = () => {

    // const [searchQuery, setSearchquery] = useState("");
    // const [suggestions, setSuggestions] = useState([])
    // const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch()
    const handleToggle = () => {
        // console.log("clicked");
        dispatch(toggleMenu());
    }


    // const searchCache=useSelector((store)=>store.search);

    // useEffect(() => {
    //     // console.log(searchQuery);
        
        
    //     const timer = setTimeout(() => {
        
    //         if(searchCache[searchQuery]){
    //             setSearchquery(searchCache[searchQuery]);
    //         }else{
    //             getSuggestionData();
    //         }
    //     }, 200);

    //     return () => clearTimeout(timer);


    // }, [searchQuery])


    // const getSuggestionData = async () => {

    //     const data = await fetch(Youtube_Search_API + searchQuery)

    //     const json = await data.json()
    //     // console.log(json);
    //     setSuggestions(json[1]);

    //     dispatch(cacheResults({
    //         [searchQuery]:json[1],
    //     }))

    // };
    // grid grid-flow-col p-5 m-2 shadow-md

    return (
        <div className='w-full grid grid-flow-col p-5 mx-2 shadow-md fixed  bg-slate-50'>
            <div className='flex col-span-1 '>
                <img className='h-8 cursor-pointer' onClick={handleToggle}  alt="menu-logo" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />

                <img className='h-8 mx-2' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" />
            </div>
            <div  className='col-span-10 ml-4' >
                <Search />
            </div>
            

            {/* <div className='col-span-10 ml-4' >
                <div>
                    <input type='text' className='w-6/12 border border-gray-400 h-8 rounded-l-full p-4  '
                        onChange={(e) => setSearchquery(e.target.value)}
                        value={searchQuery}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                    />

                   
                    <button className='border  border-gray-900 h-8 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {showSuggestions && (<div className='p-2 mx-2 absolute bg-white w-4/12 shadow-lg rounded-lg border border-x-white' onClick={()=>console.log("query search clicked")}>
                    <ul >
                        {suggestions.map((query) => <li key={query} className='py-2 px-3 shadow-sm hover:bg-gray-100' >{query}</li>)}
                    </ul>
                </div>)
                
                } 
            </div> */}
            <div className='col-span-1'>
                <img className='h-8' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header;
