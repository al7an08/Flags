import React from 'react'
import { useState } from 'react';
import { Stepper } from '@salutejs/plasma-ui'
const MenuPage = (props) => {
    const [value, setValue] = useState(10);
    const { setNumOfQuestions, handleStartGame, numOfQuestions } = props;
    return (
        <div className='menuPage'>
            <h1>Количество вопрос</h1>
            <Stepper className='stepper' step={1}
                value={numOfQuestions}
                min={5}
                max={100}
                showRemove={true}
                pin="circle-circle"
                onChange={(value) => {
                    setValue(value)
                    setNumOfQuestions(value)
                }}
                onRemove={() => console.log('onRemove')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                ariaLabelRemove="Удалить"
                ariaLabelDecrement="Уменьшить значение"
                ariaLabelIncrement="Увеличить значение" />
            <button className='button' onClick={handleStartGame}>Начать игру</button>
        </div>
    )
}

export default MenuPage