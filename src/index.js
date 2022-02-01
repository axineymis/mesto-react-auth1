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

function showPopupAdd() {
  popupPlaceClass.open();

  contentFormValidation.removeInputError();
  contentFormValidation._toggleButtonError();
  
  
}

function showProfilePopup() {
  // if (nameInput.value === "" && textInput.value === "") {
  // nameInput.value = userInfo.getUserInfo().name;
  // textInput.value = userInfo.getUserInfo().text;
  const userEdit = userInfo.getUserInfo();
  nameInput.value = userEdit.name;
  textInput.value = userEdit.comment;
  // }
 
    popupProfileClass.open();
}

buttonEdit.addEventListener('click', showProfilePopup);
buttonAdd.addEventListener('click', showPopupAdd);


function createCard(data) {
  const card = new Card(data, '#templateCard', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(name, link) {
  // const popupWithImage = new PopupWithImage('.popup_type_img');
  popupWithImage.open({ name, link });
}

//const popupPlaceClass = new PopupWithForm('.popup_type_add', submitPictureForm);
//const popupProfileClass = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);
const userInfo = new UserInfo({ nameSelector: '.profile__name', userInfoSelector: '.profile__text'})
const contentFormValidation = new FormValidator(config, formImg);
const profileFormValidation = new FormValidator(config, profileForm);
const popupWithImage = new PopupWithImage('.popup_type_img');

const popupProfileClass = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  
  handleFormSubmit: ({ name, comment }) => {
    userInfo.setUserInfo({ name, comment });
    popupProfileClass.close();
  }
});

const popupPlaceClass = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: ({ title, img }) => {
    console.log(title)
    console.log(img)
    const newCard = createCard({ name:title, link: img });
    cards.prependItem(newCard);
    popupPlaceClass.close();
    
  }
});

const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cards.addItem(card);
  },
},
".elements");
cards.renderItems();





// function handleProfileFormSubmit () {
//   userInfo.setUserInfo({
//   name: nameInput.value,
//   text: textInput.value
//   });
//   popupProfileClass.close();
// }

//function submitPictureForm() { 

  // const inputs ={ 
  //   name: titleInput.value, 
  //   link: imgInput.value, 
  // }; 


//   const newCard = createCard(inputs);
//   cardElements.prepend(newCard); 

//   popupPlaceClass.close(); 
// } 




// function submitPictureForm({ placeName, placeLink }) {
//   const newCard = createCard({ name: placeName, link: placeLink });
//   cards.prependItem(newCard);
//   popupPlaceClass.close();
// }

// const popupPlaceClass = new PopupWithForm({
//   popupSelector: '.popup_type_add',
//   handleFormSubmit: ({ placeName, placeLink }) => {
//     const newCard = createCard({ name: placeName, link: placeLink });
//     cards.prependItem(newCard);
//     popupPlaceClass.close();
//   }
// });

 



  contentFormValidation.enableValidation();
  profileFormValidation.enableValidation();

  popupProfileClass.setEventListeners();
  popupPlaceClass.setEventListeners();
  popupWithImage.setEventListeners();