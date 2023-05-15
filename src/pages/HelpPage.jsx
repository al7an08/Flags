import React from 'react'

const HelpPage = ({ handleHelp }) => {
    return (
        <div className='helpPage'>
            <h1>Правила игры</h1>
            <p>На экране будет показан флаг страны, Вам необходимо, выбрав один из вариантов, угадать какой стране принадлежит данный флаг. Удачной игры!</p>
            <button className='button' onClick={handleHelp}>Вернуться назад</button>
        </div>
    )
}

export default HelpPage