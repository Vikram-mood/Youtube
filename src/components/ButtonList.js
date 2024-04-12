import React from 'react'
import Button from './Button';

const ButtonList = () => {
    const buttons=["All","music","mix","telugu movies","Gaming","t-series","JavaScript","react","python","tamil cinema","recently watched","liked"]
    return (
        <div className='flex'> 
            {buttons.map((button) => <Button key={button} name={button}/>)}
                {/* <Button name={"vikram"}/> */}
        </div>
    )
}
export default ButtonList;
