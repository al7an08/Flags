import React from 'react'
import Question from '../components/Question'
import { BodyL, bodyL } from '@salutejs/plasma-ui';

const QuestionPage = (props) => {
    const { countryImage, answers, correctAnswer, questionNumber } = props;
    return (
        <div className='questionPage'>
            <div className="questionCount"> Вопрос номер - {questionNumber} </div>
            <Question
                countryImage={countryImage}
                answers={answers}
                correctAnswer={correctAnswer}
            />
        </div>
    )
}

export default QuestionPage