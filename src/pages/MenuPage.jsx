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
            {/* <Stepper className='stepper' step={1}
                value={numOfQuestions}
                min={5}
                max={100}
                showRemove={false}
                pin="circle-circle"
                onChange={(value) => {
                    setNumOfQuestions(value)
                }}
                onRemove={() => console.log('onRemove')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                ariaLabelRemove="Удалить"
                ariaLabelDecrement="Уменьшить значение"
                ariaLabelIncrement="Увеличить значение" /> */}
            <StepperRoot className='stepper'>
                <StepperButton
                    aria-label="Уменьшить значение"
                    view={'secondary'}
                    icon={<IconMinus color="inherit" size="l" />}
                    onClick={() => {
                        setNumOfQuestions(Math.max(parseInt(numOfQuestions) - step, min))
                    }}
                    disabled={numOfQuestions <= min}
                />
                <StepperValue value={parseInt(numOfQuestions)} disabled={false} showWarning={false} />
                <StepperButton
                    aria-label="Увеличить значение"
                    view="secondary"
                    icon={<IconPlus color="inherit" size="l" />}
                    disabled={numOfQuestions >= max}
                    onClick={() => {
                        setNumOfQuestions(Math.min(parseInt(numOfQuestions) + step, max))
                    }}
                />
            </StepperRoot>
            <button className='button' onClick={handleStartGame}>Продолжить</button>
            <button className='button' onClick={handleStartPage}>Вернуться в главное меню</button>
        </div>
    )
}

export default MenuPage