import React from 'react'
import api from '../utils/api'
import Card from './Card'
import EditButtonWithoutBorders from '../images/Edit_button_without_border.png'

function Main(props) {

    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfoFromServer()
            .then((userInfo) => {
                setUserName(userInfo.name)
                setUserDescription(userInfo.about)
                setUserAvatar(userInfo.avatar)
            })
    }, [])

    React.useEffect(() => {
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData)
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__person">
                    <div className="profile__avatar-wrapper">
                        <img alt="фотография профиля"
                            className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }} />
                        <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}>
                            <img className="profile__avatar-icon"
                                src={EditButtonWithoutBorders} alt="edit icon" />
                        </button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-post" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards elements">
                <ul className="cards__list"></ul>
            </section>
            <section className="cards__list elements">
                {cards.map((card) => {
                    return (
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={props.onCardClick}
                    />
                )})}
            </section>
        </main>
    );
}

export default Main