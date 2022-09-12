import React from 'react'

function EditProfilePopup(props) {
    return (
        <div className={`popup popup_type_profile ${props.isOpen ? `popup_opened` : ""}`}>
          <div className="popup__container">
            <button className="popup__close popup__close_type_info" onClick={props.onClose} type="button"></button>
            <div className="popup__edit-window">
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form-element popup__form" name="popupProfileForm" noValidate>
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
                <button className="popup__save popup__save_user-info" name="popupSubmit"
                  type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>        
    )
}

export default EditProfilePopup