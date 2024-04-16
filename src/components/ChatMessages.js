import React from 'react'

const ChatMessages = ({name,message}) => {
    return (
        <div className='flex text-center'>
            <img className='h-8' alt="icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <span className='font-semibold mx-2 '>{name}</span>
            <span>{message}</span>
        </div>
    )
}
export default ChatMessages;
