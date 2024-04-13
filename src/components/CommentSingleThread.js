import React from 'react'

const CommentSingleThread = ({data}) => {
    const {name,text,replies}=data
    console.log(replies);

    return (
        <div className='flex'>
            <img className='h-8 mr-2 ' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <div>
            <p className='font-semibold'>{name}</p>
            <p>{text}</p>
            {replies.map((reply,index)=>(
                <div key={index} className='flex'>
                <img className='h-8 mr-2 ' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
                <div>
                <p className='font-semibold'>{reply.name}</p>
                <p>{reply.text}</p>
                </div>
                </div>
            ))}
            

            </div>
            

        </div>
    )
}

export default CommentSingleThread;
