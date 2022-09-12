import React from 'react'

function Card(props) {
    const card = props.card

    function handleImageClick() {
        props.onCardClick(props.card);
    }

    return (
        <>
            <img src={card.link} alt={card.title} className="elements__photo" onClick={handleImageClick} style={{ backgroundImage: `url(${card.link})` }} />
            <button className="elements__delete-btn" type="button"></button>
            <div className="elements__description">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-wrapper">
                    <button className="elements__like" type="button"></button>
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </>
    )
}

export default Card