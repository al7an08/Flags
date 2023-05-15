import React from 'react'

const GameOverPage = (props) => {
    const { score, handleRestartClick } = props;

    return (
        <div className='gameOverPage'>
            <h1>Правильных ответов: {score}</h1>
            <button className='restartButton' onClick={handleRestartClick}>Играть ещё раз</button>
        </div>
    )
}

export default GameOverPage