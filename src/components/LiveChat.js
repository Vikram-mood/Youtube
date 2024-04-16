import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from "react-redux";
import { AddMessage } from '../utils/chatSlice';
import generateRandomNames, { generateRandomMessage } from '../utils/helper';
import { generateMessage_OffSet } from '../utils/constants';

const LiveChat = () => {

    const [liveMessage,setLiveMessage]=useState("");
    const chatMessages = useSelector((store) => store.chat.messages)
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("API called");
            dispatch(AddMessage({
                name: generateRandomNames(),
                message: generateRandomMessage(generateMessage_OffSet),

            }))
        }, 2000)

        return () => clearInterval(timer)

    }, [])

    return (
        <div className=" h-[500px] w-[300px] shadow-sm ml-2 overflow-y-scroll flex flex-col-reverse">


            <div>
                {chatMessages.map((chat, index) => <ChatMessages name={chat.name} message={chat.message} key={index} />)}
                <form className='w-full py-2  border border-black' 
                onSubmit={(e)=>{
                 e.preventDefault();
                console.log("form submitted: "+ liveMessage)
                dispatch(AddMessage({
                    name:"vikram",
                    message:liveMessage
                }))
                setLiveMessage("");
                }
                 
                
                }>
                    
                    <input className="p-2 ml-1" type='text' placeholder='say something' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
                    <button type='submit' className='bg-green-300 rounded-lg p-2 ml-2'>Post</button>
                </form>
            </div>



        </div>
    )
}
export default LiveChat;
