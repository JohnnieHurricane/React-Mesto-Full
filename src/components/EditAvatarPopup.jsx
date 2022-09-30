import React from 'react'
import PopupWithForm from './PopupWithForm'


function EditAvatarPopup(props) {

  const avatarRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={(e => handleSubmit(e))}
      name="edit-avatar"
      title="Обновить аватар">
      <div>
        <div className="popup__input-wrapper">
          <input
            type="url"
            name="avatar"
            className="popup__input popup__new-link"
            placeholder="Ссылка на картинку"
            ref={avatarRef}
            required
          />
          <span className="popup__input-error avatar-error"></span>
        </div>
        <button type="submit" className="popup__save">
          Сохранить
        </button>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup