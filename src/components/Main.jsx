import React from 'react'
import Card from './Card'
import EditButtonWithoutBorders from '../images/Edit_button_without_border.png'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext)
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__person">
                    <div className="profile__avatar-wrapper">
                        <img alt="фотография профиля"
                            className="profile__image" src={currentUser.avatar} />
                        <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}>
                            <img className="profile__avatar-icon"
                                src={EditButtonWithoutBorders} alt="edit icon" />
                        </button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-post" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards__list elements">
                {props.cards.map((card) => {
        return (
            <li className="elements__item" key={card._id}>
                <Card
                    card={card}
                    onCardClick={props.onCardClick}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                />
            </li>
        )
    })}
            </section>
        </main>
    );
}

export default Main