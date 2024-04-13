import React from 'react'

import Comment from './Comment';

const CommentList = ({comments}) => {
    console.log(comments);
    console.log(typeof comments)
    // console.log(Object.keys(comments).length);
    if(comments===undefined) return null;
    // if(Object.keys(comments).length===0) return null;
    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))


    // return (
    //     <div className='pl-5 border border-l-black ml-5'>
    //         <Comment data={comments} />

    //     </div>
    // )
}
export default CommentList;
