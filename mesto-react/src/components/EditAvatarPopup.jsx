import React from 'react'

function EditAvatarPopup(props) {
    return (
        <div className={`popup popup_type_edit-avatar ${props.isOpen ? `popup_opened` : ""}`}>
          <div className="popup__container">
            <button className="popup__close popup__close_type_edit-avatar" onClick={props.onClose} type="button"></button>
            <div className="popup__edit-window">
              <form className="popup__form popup__avatar-form" name="avatar" noValidate>
                <h3 className="popup__title">Обновить аватар</h3>
                <input type="url" name="avatar" required className="popup__input popup__new-link"
                  placeholder="Ссылка на картинку" />
                <span className="popup__input-error avatar-error"></span>
                <button className="popup__save popup__save_edit-avatar" name="popupSubmit"
                  type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default EditAvatarPopup