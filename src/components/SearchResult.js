import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { VIDEOS_API,GOOGLE_API_KEY} from '../utils/constants';
import VideoCard from './VideoCard';
import ResultsCard from './ResultsCard';
import {useDispatch} from "react-redux"
import { showsSearchSuggestionContainer } from '../utils/showSearchSuggestionSlice';

const SearchResult = () => {

    const [SearchParam]=useSearchParams();
    
    const [searchResults,setSearchResults]=useState([]);

    const query=SearchParam.get("search_query");
    // console.log(query);
    const dispatch=useDispatch();


    useEffect(()=>{

        getQueryData();
        window.scrollTo(0, 0);
    },[query]);

    const getQueryData=async ()=>{
        const SEARCH_URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=` + GOOGLE_API_KEY;
        const data=await fetch(SEARCH_URL);
        const json=await data.json();
        // console.log(json);
        // console.log(json.items);
        
        setSearchResults(json?.items)
        dispatch(showsSearchSuggestionContainer(false));

    }
    // console.log(searchResults);
    if (!searchResults) return null;
    if (searchResults.length===0) return null;

    return (
        <div>
             {/* {console.log(searchResults)}
            {console.log(searchResults[0].id)} */}
            {searchResults.map((result)=><ResultsCard key={result.id.videoId} data={result}/>)}
            {/* {videos.map((video)=><Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video}/></Link>)} */}

            
        </div>
    )
}
export default SearchResult
