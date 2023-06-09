import React from 'react';
import Question from '../components/Question';

const QuestionPage = (props) => {
  const { currentQuestion, score, question, handleOptionClick, answer_received, handleStartPage } = props;

  return (
    <div className='questionPage'>
      <div className='info'>
        <p className='score'>{`Счёт: ${score}`}</p>
        <p className='currentQuestion'>{`Вопрос номер: ${currentQuestion}`}</p>
        <button className='menuButton' onClick={handleStartPage}>Меню</button>
      </div>
      <Question question={question} handleOptionClick={handleOptionClick} answer_received={answer_received} />
    </div>
  );
};

export default QuestionPage;