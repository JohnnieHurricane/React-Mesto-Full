import React from 'react'
import PopupWithForm from './PopupWithForm'


function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit-avatar"
      title="Новое место">
      <div>
        <div className="popup__input-wrapper">
          <input
            type="text"
            name="popupNewTitle"
            className="popup__input popup__name"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            required
          />
          <span className="popup__input-error popupNewTitle-error"></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="url"
            name="popupNewLink"
            className="popup__input popup__new-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error popupNewLink-error"></span>
        </div>
        <button type="submit" className="popup__save">
          Создать
        </button>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup