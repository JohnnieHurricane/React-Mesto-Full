import React from 'react'

function AddPlacePopup(props) {
    return (
        <div className={`popup popup_type_new-card ${props.isOpen ? `popup_opened` : ""}`}>
          <div className="popup__container">
            <button className="popup__close popup__close_type_new-card" onClick={props.onClose} type="button"></button>
            <div className="popup__edit-window">
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form-element popup__form" name="popupCardForm" noValidate>
                <div className="popup__input-wrapper">
                  <input type="text" name="popupNewTitle" minLength="2" maxLength="30" required
                    className="popup__input popup__new-title" placeholder="Название" />
                  <span className="popup__input-error popupNewTitle-error"></span>
                </div>
                <div className="popup__input-wrapper">
                  <input type="url" name="popupNewLink" required className="popup__input popup__new-link"
                    placeholder="Ссылка на картинку" />
                  <span className="popup__input-error popupNewLink-error"></span>
                </div>
                <button className="popup__save popup__save_new-card" name="popupSubmit" type="submit">Создать</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default AddPlacePopup