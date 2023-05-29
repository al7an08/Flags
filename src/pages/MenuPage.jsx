import React from 'react'
import { useState } from 'react';
import { Stepper } from '@salutejs/plasma-ui'
const MenuPage = (props) => {
    const { setNumOfQuestions, handleStartGame, handleStartPage, numOfQuestions } = props;
    return (
        <div className='menuPage'>
            <h1 className='text'>Количество вопросов</h1>
            <Stepper className='stepper' step={1}
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
                ariaLabelIncrement="Увеличить значение" />
            <button className='button' onClick={handleStartGame}>Продолжить</button>
            <button className='button' onClick={handleStartPage}>Вернуться в главное меню</button>
        </div>
    )
}

export default MenuPage