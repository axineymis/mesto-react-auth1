export const config = {
    formSelector: '.popup__content-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'error_visible'
  };

export const popupProfile = document.querySelector(".popup_type_edit");
export const profileForm = document.querySelector('.popup__content-form')
export const nameInput = popupProfile.querySelector('.popup__input_type_name');
export const textInput = popupProfile.querySelector('.popup__input_type_text');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add');
 
export const popupAdd = document.querySelector(".popup_type_add");
export const formImg = popupAdd.querySelector('.popup__content-form');
export const buttonAvatar = document.querySelector('.profile__avatar');

export const popupAvatar = document.querySelector(".popup_type_avatar");
export const avatarForm = popupAvatar.querySelector(".popup__content-form");