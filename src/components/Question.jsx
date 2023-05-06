import React from 'react'
import { Button } from '@salutejs/plasma-ui';

const Question = (props) => {
    const { countryImage, answers, correctAnswer } = props;
    return (
        <div className='questionSection'>
            <img style={{
                height: '33vh'
            }} src={countryImage} />
            <div className='answers' alt='' >
                <div className="answer-row">
                    <Button size='l' className='button' text={answers[0]}></Button>
                    <Button size='l' className='button' text={answers[1]}></Button>
                </div>
                <div className="answer-row">
                    <Button size='l' className='button' text={answers[2]}></Button>
                    <Button size='l' className='button' text={answers[3]}></Button>
                </div>
            </div>
        </div>
    )
}

export default Question