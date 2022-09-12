import React from 'react'

function DeleteCardPopup (props) {
    return (
        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button className="popup__close popup__close_type_delete-card" type="button"></button>
            <div className="popup__edit-window popup__edit-window_small">
              <form className="popup__form-element popup__form" name="popupuCardDeleteForm">
                <h3 className="popup__title">Вы уверены?</h3>
                <button className="popup__save popup__save_delete-card" name="popupSubmit" type="submit">Да</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default DeleteCardPopup