import React from 'react'

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
          <div className="popup__container">
            <button className="popup__close popup__close_type_${props.name}" onCLick={props.onClose} type="button"></button>
            <div className="popup__edit-window">
              <h2 className="popup__title">{props.title}</h2>
              <form className="popup__form-element popup__form" name={props.name} noValidate>
                <div className="popup__input-wrapper">
                  <input type="text" name="name" minLength="2" maxLength="40" required
                    className="popup__input popup__name" placeholder="Введите имя" />
                  <span className="popup__input-error name-error"></span>
                </div>
                <div className="popup__input-wrapper">
                  <input type="text" name="about" minLength="2" maxLength="200" required
                    className="popup__input popup__profession" placeholder="Введите Вашу профессию" />
                  <span className="popup__input-error about-error"></span>
                </div>
                {props.children}
              </form>
            </div>
          </div>
        </div>
    )
}

export default PopupWithForm