import React from 'react'
import { Button } from '@salutejs/plasma-ui';

const Question = (props) => {
    const { countryImage, answers, correctAnswer } = props;
    return (
        <div className='questionSection'>
            <img style={{
                height: '33vh', margin: '0 auto'
            }} src={countryImage} />
            <div className='answers' alt='' >
                <button size='l' className='button' >{answers[0]}</button>
                <button size='l' className='button' >{answers[1]}</button>
                <button size='l' className='button' >{answers[2]}</button>
                <button size='l' className='button' >{answers[3]}</button>
            </div>
        </div>
    )
}


export default Question