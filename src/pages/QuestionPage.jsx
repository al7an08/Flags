import React from 'react'
import Question from '../components/Question'

const QuestionPage = (props) => {
    const { currentQuestion, question } = props;
    return (
        <div className='questionPage'>
            <div className='info'> Вопрос номер - {currentQuestion} </div>
            <Question
                question={question}
            />
        </div>
    )
}

export default QuestionPage