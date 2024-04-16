import React from 'react'
import { Link} from 'react-router-dom';
// import {FaSearch} from "react-icons/fa";

const ResultSuggestionContainer = ({suggestion}) => {

    // console.log(suggestions);
    
    if(suggestion==="") return null;
    // const handleClick = () => {
    //     console.log("Link clicked: " + suggestions);
    // };
   

  


    return (
        // <a href="/">Home</a>
        // <Link to='/'> Home</Link>
       
        // <Link to={"/results?search_query="+suggestions} >
       
       
    //   <div className="dark:bg-zinc-100">
    //     <p
    //       className="p-1 px-2 hover:bg-gray-100 
    //          cursor-pointer"
    //     >

    //       {suggestion}
    //     </p>
    //   </div>
    <a href={`/results?search_query=${suggestion}`}>
      <div className="dark:bg-zinc-900">
        <p className="p-1 px-2 hover:bg-gray-700 cursor-pointer">
          {suggestion}
        </p>
      </div>
    </a>
   
        
        
       
    )
}
export default ResultSuggestionContainer;
