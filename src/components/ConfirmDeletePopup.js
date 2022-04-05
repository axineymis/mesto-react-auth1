import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.handleCardDelete();
        props.onClose();
      }
    return (
        // <div className={props.isOpen
        //     ? `popup popup_type_${props.name} popup_opened`
        //     : `popup popup_type_${props.name}`} >
        //     <div className="popup__overlay" onClick={props.onClose}></div>
        //     <div className="popup__content">
        //         <button className="popup__close-button" onClick={props.onClose} type="button" ></button>
        //         <h2 className="popup__title">{props.title}</h2>
        //         <form className="popup__content-form" name={`${props.name}`} onSubmit={handleSubmit}>
        //             {props.children}
        //             <button className="popup__button" type="submit"> {props.buttonText}
        //             </button>
        //         </form>
        //     </div>
        // </div>

        <PopupWithForm 
      title="Вы уверены?" 
      name="confirmDelete"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText='Да'
    >    
      {/* <button type="submit" className="popup__submit-button">
        Да
      </button> */}
    </PopupWithForm>
    )
}

export default ConfirmDeletePopup;