import "./pages/index.css";

import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import {initialCards} from './components/data.js';
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js"; 

const popupProfile = document.querySelector(".popup_type_edit");
const profileForm = document.querySelector('.popup__content-form')
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const textInput = popupProfile.querySelector('.popup__input_type_text');

const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add');
 
const popupAdd = document.querySelector(".popup_type_add");
const formImg = popupAdd.querySelector('.popup__content-form');

const titleInput = popupAdd.querySelector('.popup__input_type_title');
const imgInput = popupAdd.querySelector('.popup__input_type_img');

const cardElements = document.querySelector(".elements");

const config = {
  formSelector: '.popup__content-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

const popupPlaceClass = new PopupWithForm('.popup_type_add', submitPictureForm);
const popupProfileClass = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit)
const userInfo = new UserInfo({ nameSelector: profileName, userInfoSelector: profileText})

function showPopupAdd() {
  popupPlaceClass.open();
  contentFormValidation.enableValidation();
}

function showProfilePopup() {
  if (nameInput.value === "" && textInput.value === "") {
  nameInput.value = userInfo.getUserInfo().name;
  textInput.value = userInfo.getUserInfo().text;
  }

  popupProfileClass.open();
  profileFormValidation.enableValidation();
}

function handleProfileFormSubmit (evt) {
  userInfo.setUserInfo({
  name: nameInput.value,
  text: textInput.value
  });
  popupProfileClass.close();
}

function submitPictureForm(evt) {
  // evt.preventDefault();
  const inputs ={
    name: titleInput.value,
    link: imgInput.value,
  };
  const newCard = createCard(inputs);
  cardElements.prepend(newCard);
 
  popupPlaceClass.close();
}

buttonEdit.addEventListener('click', showProfilePopup);
buttonAdd.addEventListener('click', showPopupAdd);

  function createCard(data) {
    const card = new Card(data, '#templateCard', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
  }

  function handleCardClick(name, link) {
    const popupWithImage = new PopupWithImage('.popup_type_img');
    popupWithImage.open({ name, link });
  }


  const contentFormValidation =
  new FormValidator(config, formImg);
  
  const profileFormValidation =
  new FormValidator(config, profileForm);
 
  const cards = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cards.addItem(card);
    },
  },
  cardElements);
  cards.renderItems();

