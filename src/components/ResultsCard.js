import React from 'react'
import { Link } from 'react-router-dom';

const ResultsCard = ({data}) => {

    const {id,snippet}=data;

     return (
        <Link to={"/watch?v="+id.videoId}>
        <div className='w-[80%] flex ml-[10%] scroll-smooth mt-4 justify-around my-2 p-2 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-slate-400'>
            <img className='w-96 shadow-lg rounded-lg' 
            src={snippet.thumbnails.medium.url} 
            alt={snippet.thumbnails.title} 

            />
            <div className='w-2/3 mx-4'>
                <p className='text-xl font-bold mb-2'>{snippet.title}</p>
                <p className='text-xl font-bold mb-2'>{snippet.channelTitle}</p>
                <p className='text-sm'>{snippet.description}</p>
            </div>
        </div>
        </Link>
    )
}
export default ResultsCard;