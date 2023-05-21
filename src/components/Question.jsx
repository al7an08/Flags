import React from 'react';

const Question = ({ handleOptionClick, question }) => {
  const { options, flagUrl, correctAnswer } = question;

  const handleButtonClick = (isCorrect) => {
    handleOptionClick(isCorrect);
  };

  return (
    <div className='questionSection'>
      <img className='flagImage' src={flagUrl} alt='' />
      <div className='answers'>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleButtonClick(option === correctAnswer)} className='button'>
            {`${index + 1}. ${option}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;