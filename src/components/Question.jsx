import React from 'react'

const Question = ({ question }) => {
    const answersOptions = question.answersOptions;
    const countryImage = question.countryImage;
    return (
        <div className='questionSection'>
            <img className='flagImage' src={countryImage} />
            <div className='answers' >
                <button className='button'>{answersOptions[0].answersText}</button>
                <button className='button'>{answersOptions[1].answersText}</button>
                <button className='button'>{answersOptions[2].answersText}</button>
                <button className='button'>{answersOptions[3].answersText}</button>
            </div>
        </div>
    )
}


export default Question