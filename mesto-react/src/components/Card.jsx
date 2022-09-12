import React from 'react'

function Card(props) {
    const card = props.card

    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
        <li className="elements__item">
            <img src={card.link} alt={card.title} className="elements__photo" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }}/>
            <button className="elements__delete-btn" type="button"></button>
            <div className="elements__description">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-wrapper">
                    <button className="elements__like" type="button"></button>
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card