import React from 'react'
import Question from '../components/Question'
import { Badge } from '@salutejs/plasma-ui';
import { IconDone, IconStarFill } from '@salutejs/plasma-icons';
const QuestionPage = (props) => {
    const { currentQuestion, score, question, handleOptionClick } = props;
    return (
        <div className='questionPage'>
            <div className='info'>
                <Badge text={`Вопрос номер: ${currentQuestion}`} view='primary' size='l' contentLeft={<IconDone color="inherit" size="xs" />} />
                <Badge text={`Правильных ответов: ${score}`} view='primary' size='l' contentLeft={<IconStarFill color="inherit" size="xs" />} />
            </div>
            <Question
                question={question} handleOptionClick={handleOptionClick}
            />
        </div>
    )
}

export default QuestionPage