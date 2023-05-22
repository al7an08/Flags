import React from 'react';
import { Transition } from 'react-transition-group'
import { useState, useEffect } from 'react';


const Question = ({ handleOptionClick, question }) => {
  const { options, flagUrl, correctAnswer } = question;
  const [imgVisible, setImgVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = (isCorrect) => {
    handleOptionClick(isCorrect);
    setTimeout(() => setImgVisible(false), 3000);
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 3000);
  };

  useEffect(() => {
    setImgVisible(true);
    console.log('Update');
  })

  return (
    <Transition
      in={imgVisible}
      timeout={3000}
      mountOnEnter
      unmountOnEnter
    >
      {state => <div className={`questionSection  ${state}`}>
        <img rel="preload" className={`flagImage`} src={flagUrl} alt='' />
        <div className='answers'>
          {options.map((option, index) => (
            <button disabled={isButtonDisabled} key={index} onClick={() => handleButtonClick(option === correctAnswer)} className='button'>
              {`${index + 1}. ${option}`}
            </button>
          ))}
        </div>
      </div>}
    </Transition>
  );
};

export default Question;