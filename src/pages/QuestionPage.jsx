import React from 'react';
import Question from '../components/Question';

const QuestionPage = (props) => {
  const { currentQuestion, score, question, handleOptionClick, answer_received, handleStartPage } = props;

  return (
    <div className='questionPage'>
      <div className='info'>
        <button className='menuButton' onClick={handleStartPage}>Меню</button> {/* Added menu button */}
        <p className='currentQuestion'>{`Вопрос номер: ${currentQuestion}`}</p>
        <p className='score'>{`Правильных ответов: ${score}`}</p>
      </div>
      <Question question={question} handleOptionClick={handleOptionClick} answer_received={answer_received} />
    </div>
  );
};

export default QuestionPage;