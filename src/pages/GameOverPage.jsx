import React from 'react'

const GameOverPage = (props) => {
    const { score, handleRestartClick } = props;

    return (
        <div className='gameOverPage'>
            <h1 className='text' style={{ textAlign: 'center' }}>Правильных ответов: {score}</h1>
            <button autoFocus={true} style={{ width: "50vw" }} className='button' style={{ textAlign: 'center' }} onClick={handleRestartClick}>Играть ещё раз</button>
        </div>
    )
}

export default GameOverPage