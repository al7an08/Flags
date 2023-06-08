import React from 'react';
import { Transition } from 'react-transition-group'
import { useState, useEffect, useRef } from 'react';

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

  return [htmlElRef, setFocus]
}

const Question = ({ handleOptionClick, question, answer_received }) => {
  const { options, flagUrl, correctAnswer } = question;
  const [imgVisible, setImgVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonRef, setButtonFocus] = useFocus()


  const handleButtonClick = (isCorrect) => {
    handleOptionClick(isCorrect);
    setTimeout(() => setImgVisible(false), 3000);
    setButtonFocus();
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000);
  };



  useEffect(() => {
    setButtonFocus();
    setImgVisible(true);
    if (answer_received) {
      setTimeout(() => setImgVisible(false), 3000);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000)
    }
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
            <button /*ref={index === 0 ? buttonRef : null} autoFocus={index === 0 && !isButtonDisabled ? true : false}*/ disabled={isButtonDisabled} style={isButtonDisabled ? (option !== correctAnswer ? { backgroundImage: 'linear-gradient(90deg, #d82b56,#be264c,#920c2d)' } : { backgroundImage: 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))' }) : {}} key={parseInt(index)} onClick={() => {
              handleButtonClick(option === correctAnswer);
            }} className='button'>
              {`${parseInt(index) + 1}. ${option}`}
            </button>
          ))}
        </div>
      </div>}
    </Transition>
  );
};

export default Question;