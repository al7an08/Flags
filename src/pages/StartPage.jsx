import React from 'react'

const StartPage = (props) => {
    const { handleStartGame, handleHelp } = props;
    return (
        <div className='startPage'>
            <h2>Добро пожаловать! Начнем играть?</h2>
            <button className='button' onClick={handleStartGame}>Начать игру</button>
            <button className='button' onClick={handleHelp}>Как играть?</button>
        </div>
    )
}

export default StartPage