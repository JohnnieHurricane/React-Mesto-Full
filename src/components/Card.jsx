import React from 'react'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const card = props.card
    const isOwn = card.owner._id === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `elements__delete-btn ${isOwn ? '' : 'elements__delete-btn_hide'}`
    );
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `elements__like ${isLiked ? '' : 'elements__like_active'}`
    );

    function handleImageClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick(card) {
        props.onCardLike(card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <>
            <img src={card.link} alt={card.title} className="elements__photo" onClick={handleImageClick} style={{ backgroundImage: `url(${card.link})` }} />
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
            <div className="elements__description">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-wrapper">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </>
    )
}

export default Card