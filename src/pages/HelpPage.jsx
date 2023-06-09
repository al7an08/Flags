import React from 'react'

const HelpPage = ({ handleStartPage }) => {
    return (
        <div className='helpPage'>
            <h1 className='text'>Правила игры</h1>
            <p className='text'>На экране будет показан флаг страны, Вам необходимо, выбрав один из вариантов, угадать какой стране принадлежит данный флаг. Чтобы вернуться в главное меню во время игры необходимо сказать «Вернуться». Удачной игры!</p>
            <button autoFocus={true} className='restartButton' onClick={handleStartPage} >Главное меню</button>
        </div>
    )
}

export default HelpPage
