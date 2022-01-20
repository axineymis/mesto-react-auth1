import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './data.js';
const popupProfile = document.querySelector(".popup_type_edit");
const profileForm = document.querySelector('.popup__content-form')
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const textInput = popupProfile.querySelector('.popup__input_type_text');

const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add');
 
const popupAdd = document.querySelector(".popup_type_add");
const addCardCloseButton =popupAdd.querySelector(".popup__close-button");
const popupPic = document.querySelector('.popup_type_img');
const popupPicCloseButton = popupPic.querySelector('.popup__close-button');
const formImg = popupAdd.querySelector('.popup__content-form');

const titleInput = popupAdd.querySelector('.popup__input_type_title');
const imgInput = popupAdd.querySelector('.popup__input_type_img');

const popupOverlayEdit = popupProfile.querySelector('.popup__overlay');
const popupOverlayAdd = popupAdd.querySelector('.popup__overlay');
const popupOverlayPic = popupPic.querySelector('.popup__overlay');

const saveImgBtn = document.querySelector('.popup__button_add-button');
const cardElements = document.querySelector(".elements");

  function createCard(data) {
    const card = new Card(data, '#templateCard', openPopup);
    const cardElement = card.generateCard();
    return cardElement;
  }
  
  initialCards.forEach((item) => {
    const card = createCard(item);
    cardElements.append(card);
  });

  function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileText.textContent = textInput.value
    closePopup(popupProfile);
}

function submitPictureForm(evt) {
  evt.preventDefault();
  const inputs ={
    name: titleInput.value,
    link: imgInput.value,
  };
  const newCard = createCard(inputs);
  cardElements.prepend(newCard);
  closePopup(popupAdd);
}


function openPopup(popup) {
    popup.classList.add("popup_open");
    document.addEventListener("keyup", handleKeyEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener("keyup", handleKeyEsc);
}

function showProfilePopup() {
  nameInput.value = profileName.textContent;
  textInput.value = profileText.textContent;
  openPopup(popupProfile);
}

function showPopupAdd() {
  saveImgBtn.classList.add('popup__button_disabled');
  saveImgBtn.setAttribute('disabled','disabled');
  titleInput.value = '';
  imgInput.value = '';
  openPopup(popupAdd);
}


editButton.addEventListener('click', showProfilePopup);
profileCloseButton.addEventListener('click', () => closePopup(popupProfile));
profileForm.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', () => showPopupAdd(popupAdd));
addCardCloseButton.addEventListener('click', () => closePopup(popupAdd));
formImg.addEventListener('submit', submitPictureForm);

popupPicCloseButton.addEventListener('click', () => closePopup(popupPic));

function handleKeyEsc(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
   }
}

popupOverlayEdit.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupOverlayAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

popupOverlayPic.addEventListener('click', () => {
  closePopup(popupPic);
});

const config = {
  formSelector: '.popup__content-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

const contentFormValidation =
  new FormValidator(config, formImg);
  contentFormValidation.enableValidation();

const profileFormValidation =
  new FormValidator(config, profileForm);
  profileFormValidation.enableValidation();
  
  