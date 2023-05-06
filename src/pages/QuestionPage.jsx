import React from 'react'
import Question from '../components/Question'

const QuestionPage = (props) => {
    const { countryImage, answers, correctAnswer } = props;
    return (
        <div className='questionPage'>

            <Question
                countryImage={countryImage}
                answers={answers}
                correctAnswer={correctAnswer}
            />
        </div>
    )
}

export default QuestionPage