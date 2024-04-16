import React from 'react'


import commentsData from '../utils/commentsData';
import Comment from './Comment';
import commentsSingleThreadData from '../utils/commentSingleThread';/// data
import CommentSingleThread from './CommentSingleThread';
import CommentList from './CommentList';

 const CommentContainer = () => {
    // console.log(commentsData);
    return (
        <div >
            <div className='font-bold text-2xl mb-2'>Comments: </div>

            {commentsData.map((comment,index)=> <Comment key={index} data={comment}/>)}
            {/* {commentsData.map((comment,index)=> <CommentList key={index} comments={comment} />)}  */}
            {/* {<CommentList comments={commentsData} />} */}
            {/* {commentsSingleThreadData.map((comment,index)=><CommentSingleThread key={index} data={comment}/>) } */}

         
        </div>
    )
}

export default CommentContainer;