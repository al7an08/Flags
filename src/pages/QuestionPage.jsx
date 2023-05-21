import React from 'react'
import Question from '../components/Question'
import { Badge } from '@salutejs/plasma-ui';
import { IconDone, IconStarFill } from '@salutejs/plasma-icons';
const QuestionPage = (props) => {
    const { currentQuestion, score, question, handleOptionClick } = props;
    return (
        <div className='questionPage'>
            <div className='info'>
                <p className='currentQuestion'>{`Вопрос номер: ${currentQuestion}`}</p>
                <p className='score'>{`Правильных ответов: ${score}`}</p>
            </div>
            <Question
                question={question} handleOptionClick={handleOptionClick}
            />
        </div>
    )
}

export default QuestionPage