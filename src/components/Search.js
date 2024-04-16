import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Youtube_Search_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link,useNavigate } from 'react-router-dom';
import ResultSuggestionContainer from './ResultSuggestionContainer';

const Search = () => {


    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch()
    const [menuOpen, setMenuOpen] = useState(false);

    // const handleToggle = () => {
    //     // console.log("clicked");
    //     dispatch(toggleMenu());
    // }

    const handleClickAway = () => {
        // alert("Maybe close the popup");
        setMenuOpen(false);
      };

    const searchCache = useSelector((store) => store.search.cache);
    useEffect(() => {
        // console.log(searchQuery);


        const timer = setTimeout(() => {

            if (searchCache[searchQuery]) {
                setSearchQuery(searchCache[searchQuery]);
            } else {
                getSuggestionData();
            }
        }, 500);

        return () => clearTimeout(timer);


    }, [searchQuery])


    const getSuggestionData = async () => {

        const data = await fetch(Youtube_Search_API + searchQuery)

        const json = await data.json()
        console.log(json);
        setSuggestions(json[1]);
        const obj={}
        obj[searchQuery]=json[1];
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))

    };
    const navigate=useNavigate();
    // const handleSuggestionClick=(suggestion)=>{
        
    //     navigate(`/results?search_query=${suggestion}`);
    // };

    // if(searchQuery !=="" && !suggestions) return null;
    // console.log(searchQuery==="");
    // console.log(suggestions);
    if(!suggestions) return null;
    
    return (
        <form className='ml-4 '
            onSubmit={(e) => {
                e.preventDefault();
                
                // navigate(`/results?search_query=${encodeURIComponent(suggestions)}`);
        }} >
            <div className='flex'>
                {/* <input type='text' className='w-6/12 border border-gray-400 h-8 rounded-l-full p-4  '
                    onChange={(e) =>{
                        //  console.log(e.target.value)
                        setSearchQuery(e.target.value)}}
                    
                    value={searchQuery}
                    // onFocus={() => setShowSuggestions(true)}
                    // onBlur={() => setShowSuggestions(false)}
                /> */}
                <input
              type="text"
              placeholder="Search..."
              className="w-[550px] border rounded-s-full px-7 shadow-lg dark:bg-zinc-800"
              value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              onChange={(e) => (
                setSearchQuery(e.target.value),
                e.target.value !== "" ? setShowSuggestions(true) : setShowSuggestions(false)
                
              )}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />
                <Link to={`/results?search_query=${searchQuery}`}>
              <img
                className="h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100 dark:bg-zinc-700"
                alt="search"
                src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
              />
            </Link>


            {showSuggestions && (
          <div
            className="z-[9] absolute mt-10 bg-white w-[550px] border rounded-lg shadow-lg  font-semibold mx-1 my-[2px]"
            onClickAway={handleClickAway}
          >
            {suggestions.map((suggestion) => {
              return (
                <ResultSuggestionContainer
                  suggestion={suggestion}
                  key={suggestion}
                 
                />
              );
            })}
          </div>
        )}
            
                {/* <Link to={"/results?search_query="+searchQuery}><button className='border  border-gray-900 h-8 rounded-r-full bg-gray-100'>Search</button> </Link> */}
            
            {/* {(showSuggestions && searchQuery !=="") && (<div className='p-2 mx-2 absolute bg-white w-4/12 shadow-lg rounded-lg border border-x-white' >
                <ul >
                    
                    
                       { suggestions.map((suggestion,index)=>(
                        <li key={index} >
                        <ResultSuggestionContainer  suggestion={suggestion} />
                        </li>))}
                       

                </ul>
            </div>)
            } */}
            </div>

        </form>
    )

}
export default Search;

