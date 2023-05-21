import React from 'react'

const Question = (props) => {
    const { handleOptionClick, question } = props;
    const answersOptions = question.answersOptions;
    const countryImage = question.countryImage;
    return (
        <div className='questionSection'>
            <img className='flagImage' src={countryImage} alt='' />
            <div className='answers' >
                <button onClick={() => handleOptionClick(answersOptions[0].isCorrect)} className='button'>{answersOptions[0].answerNumber}. {answersOptions[0].answersText}</button>
                <button onClick={() => handleOptionClick(answersOptions[1].isCorrect)} className='button'>{answersOptions[1].answerNumber}. {answersOptions[1].answersText}</button>
                <button onClick={() => handleOptionClick(answersOptions[2].isCorrect)} className='button'>{answersOptions[2].answerNumber}. {answersOptions[2].answersText}</button>
                <button onClick={() => handleOptionClick(answersOptions[3].isCorrect)} className='button'>{answersOptions[3].answerNumber}. {answersOptions[3].answersText}</button>
            </div>
        </div>
    )
}


export default Question