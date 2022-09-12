import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit-profile"
      title="Редактировать профиль">
      <div>
        <div className="popup__input-wrapper">
          <input
            type="text"
            name="name"
            className="popup__input popup__name"
            minLength="2"
            maxLength="40"            
            placeholder="Введите имя"
            required
          />
          <span className="popup__input-error name-error"></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="text"
            name="about"
            minLength="2" 
            maxLength="200"
            className="popup__input popup__profession"
            placeholder="Введите Вашу профессию"
            required
          />
          <span className="popup__input-error about-error"></span>
        </div>
        <button type="submit" className="popup__save">
          Сохранить
        </button>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup