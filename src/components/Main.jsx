import React from 'react'
import api from '../utils/api'
import Card from './Card'
import EditButtonWithoutBorders from '../images/Edit_button_without_border.png'

function Main(props) {

    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    // React.useEffect(() => {
    //     api.getUserInfoFromServer()
    //         .then((userInfo) => {
    //             setUserName(userInfo.name)
    //             setUserDescription(userInfo.about)
    //             setUserAvatar(userInfo.avatar)
    //         })
    // }, [])

    // React.useEffect(() => {
    //     api.getCards()
    //         .then((cardsData) => {
    //             setCards(cardsData)
    //         })
    // }, [])

    React.useEffect(() => {
        Promise.all([api.getUserInfoFromServer(), api.getCards()])
            .then(([userInfo, cardsData]) => {
                setUserName(userInfo.name)
                setUserDescription(userInfo.about)
                setUserAvatar(userInfo.avatar)
                setCards(cardsData)
            })
    }, [])

    /*Можешь, пожалуйста, объяснить, как вынести правильно map из разметки JSX? 
    Я сам не понял и мы коллективно в чатике когорты тоже не сообразили
    я потом потру лишние комменты, а знания превнесу в массы в чатик)*/

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__person">
                    <div className="profile__avatar-wrapper">
                        <img alt="фотография профиля"
                            className="profile__image" src={userAvatar} />
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
            <section className="cards__list elements">
                {cards.map((card) => {
                    return (
                        <li className="elements__item">
                            <Card
                                card={card}
                                key={card._id}
                                onCardClick={props.onCardClick}
                            />
                        </li>
                    )
                })}
            </section>
        </main>
    );
}

export default Main