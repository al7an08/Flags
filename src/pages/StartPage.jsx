import React from 'react'

const StartPage = (props) => {
    const { handleStartGame, handleHelp } = props;
    return (
        <div className='startPage'>
            <button className='button' onClick={handleStartGame}>Начать игру</button>
            <button className='button' onClick={handleHelp}>Правила</button>
        </div>
    )
}

export default StartPage
