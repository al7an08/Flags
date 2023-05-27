import React from 'react'

const HelpPage = ({ handleHelp }) => {
    return (
        <div className='helpPage'>
            <h1 className='text'>Правила игры</h1>
            <p className='text'>На экране будет показан флаг страны, Вам необходимо, выбрав один из вариантов, угадать какой стране принадлежит данный флаг. Удачной игры!</p>
            <button className='button' onClick={handleHelp} style={{
                width: '50%',
            }}>Вернуться назад</button>
        </div>
    )
}

export default HelpPage