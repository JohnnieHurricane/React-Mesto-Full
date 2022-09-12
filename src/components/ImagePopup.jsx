function ImagePopup (props) {
    return (
        <div className={`popup popup_type_view ${props.isOpen ? `popup_opened` : ""}`}>
        <div className="popup__review">
          <button className="popup__close popup__close_type_view" onClick={props.onClose} type="button"></button>
          <img src={props.card.link} alt={props.card.name} className="popup__card-image" onClick={props.onCardClick}/>
          <p className="popup__card-title">{props.card.name}</p>
        </div>
      </div>
    )
}

export default ImagePopup