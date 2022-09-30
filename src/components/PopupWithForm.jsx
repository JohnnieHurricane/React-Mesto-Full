import React from 'react'

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
      <div
        className="popup__container">
        <button
          className="popup__close popup__close_type_${props.name}"
          onClick={props.onClose}
          type="button">
        </button>
        <div className="popup__edit-window">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form-element popup__form"
            name={props.name}
            onSubmit={props.onSubmit}
            noValidate>
            {props.children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm