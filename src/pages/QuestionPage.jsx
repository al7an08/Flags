import React from 'react'
import Question from '../components/Question'

const QuestionPage = (props) => {
    const { currentQuestion, score, question, handleOptionClick } = props;
    return (
        <div className='questionPage'>
            <div className='info'>
                <p className='questionNumber'>Вопрос номер: {currentQuestion}</p>
                <p className='score'>Правильных ответов: {score}</p>
            </div>
            <Question
                question={question} handleOptionClick={handleOptionClick}
            />
        </div>
    )
}

export default QuestionPage