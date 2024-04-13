import React from 'react'
/// NOTE: THIS FILE IS FOR NESTED THREAD LIKE : REDDIT
 const Comment = ({data}) => {
    const {name,text,replies}=data;
    // console.log(replies);
    // console.log( typeof replies);
    // const moreReplies= replies !==undefined?false:true;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2'>
            <img className='h-8 mr-2 ' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <div>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
            
            <div>
            { replies.map((reply,index)=> <Comment  key={index} data={reply}/> )}
            
            </div>
            

            </div>
            

        </div>
    )
}
export default Comment;
