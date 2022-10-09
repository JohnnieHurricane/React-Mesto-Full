import React from "react";
import success from "../images/success.svg";
import reject from "../images/reject.svg";
import closeButton from "../images/close_icon.svg";

export default function InfoTooltip(props) {
    return (
        <div
            className={`popup popup_type_info ${isOpen ? `popup_opened` : ""}`}>
            <div
                className="popup__container popup__container_type_info">
                <button
                    className='popup__close'
                    onClick={onClose}
                    type="button">
                </button>
                <div className="popup__edit-window">
                    <img
                        className="popup__callback-image"
                        src={props.success ? success : reject}
                        alt={props.success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
                    />
                    <h2 className="popup__title popup__title_type_info">{props.success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
                </div>
            </div>
        </div>
        // <section
        //   className={`popup popup_type_info ${props.isOpen && "popup_opened"}`}
        // >
        //   <div className="popup__container popup__container_info">
        //     <img
        //       src={props.success ? success : reject}
        //       alt=""
        //       className="popup__info-image"
        //     />
        //     <h2 className="popup__title popup__title_type_info">
        //       {props.success
        //         ? "Successful registration!"
        //         : "Something went wrong. Try again"}
        //     </h2>
        //   </div>
        // </section>
    );
}