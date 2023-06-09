import React from 'react'

const GameOverPage = (props) => {
    const { score, handleRestartClick } = props;

    return (
        <div className='gameOverPage'>
            <h1 className='text' style={{ textAlign: 'center' }}>Правильных ответов: {score}</h1>
            <button autoFocus={true} className='button' onClick={handleRestartClick}>Играть ещё раз</button>
        </div>
    )
}

export default GameOverPage