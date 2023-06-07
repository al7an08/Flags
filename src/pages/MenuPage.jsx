import React from 'react'
import { StepperValue, StepperButton, StepperRoot } from '@salutejs/plasma-ui'
import { IconPlus, IconMinus } from '@salutejs/plasma-icons';

const MenuPage = (props) => {
  const { setNumOfQuestions, handleStartGame, handleStartPage, numOfQuestions } = props;
  const max = 100;
  const min = 5;
  const step = 1;

  return (
    <div className='menuPage'>
      <h1 className='text'>Количество вопросов</h1>
      <StepperRoot className='stepper' style={{ fontSize: '3rem' }}>
        <StepperButton
          aria-label="Уменьшить значение"
          view={'secondary'}
          icon={<IconMinus color="inherit" size="l" />}
          onClick={() => {
            setNumOfQuestions(Math.max(parseInt(numOfQuestions) - step, min))
          }}
          disabled={numOfQuestions <= min}
          style={{ fontSize: '3rem' }}
        />
        <StepperValue value={parseInt(numOfQuestions)} disabled={false} showWarning={false} style={{ fontSize: '3rem' }} />
        <StepperButton
          aria-label="Увеличить значение"
          view="secondary"
          icon={<IconPlus color="inherit" size="l" />}
          disabled={numOfQuestions >= max}
          onClick={() => {
            setNumOfQuestions(Math.min(parseInt(numOfQuestions) + step, max))
          }}
          style={{ fontSize: '3rem' }}
        />
      </StepperRoot>
      <button autoFocus={true} className='button' onClick={handleStartGame}>Продолжить</button>
      <button className='button' onClick={handleStartPage}>Главное меню</button>
    </div>
  )
}

export default MenuPage