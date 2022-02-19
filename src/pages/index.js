import "./index.css";

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards} from '../components/data.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js"; 
import Api from "../components/Api.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


const popupProfile = document.querySelector(".popup_type_edit");
const profileForm = document.querySelector('.popup__content-form')
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const textInput = popupProfile.querySelector('.popup__input_type_text');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add');
 
const popupAdd = document.querySelector(".popup_type_add");
const formImg = popupAdd.querySelector('.popup__content-form');
const buttonAvatar = document.querySelector('.profile__avatar');

const popupAvatar = document.querySelector(".popup_type_avatar");
const avatarForm = popupAvatar.querySelector(".popup__content-form");

const config = {
  formSelector: '.popup__content-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error_visible'
};

const avatarFormValidation = new FormValidator(config, avatarForm)
const contentFormValidation = new FormValidator(config, formImg);
const profileFormValidation = new FormValidator(config, profileForm);
const popupWithImage = new PopupWithImage('.popup_type_img');
const userInfo = new UserInfo({ 
  nameSelector: '.profile__name', 
  userInfoSelector: '.profile__text',
  avatarSelector: '.profile__avatar'
});

// Открытие попапа загрузки карточек
function showPopupAdd() {
  popupPlaceClass.open();
  contentFormValidation.removeInputError();
  contentFormValidation._toggleButtonError();
}

// Открытие попапа профиля
function showProfilePopup() {
  const userEdit = userInfo.getUserInfo();
  nameInput.value = userEdit.name;
  textInput.value = userEdit.about;

  profileFormValidation.removeInputError();
  popupProfileClass.open(); 
}

// Открытие попапа редактирования аватара
function showAvatarPopup() {
  popupAvatarClass.open();
  avatarFormValidation.removeInputError();
  avatarFormValidation._toggleButtonError()
}

buttonEdit.addEventListener('click', showProfilePopup);
buttonAdd.addEventListener('click', showPopupAdd);
buttonAvatar.addEventListener('click', showAvatarPopup);

function createCard(data) {
  const card = new Card(data, '#templateCard', handleCardClick, userInfo, handleDeleteBtnClick, handleLikeClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardsList = new Section({
  renderer: (item) => {
    return createCard(item)
  },
},
".elements");

// Обработчик формы редактирования профиля
const popupProfileClass = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: ({ name, about}) => {
    popupProfileClass.showLoading(true);
    api.patchUserInfo({ name, about })
      .then((info) => {
        userInfo.setUserInfo(info);
        popupProfileClass.close();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
       popupAvatarClass.showLoading(false, 'Cохранить')
      })
  }
});

// Обработчик формы добавления карточки
const popupPlaceClass = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: ({ title, img }) => {
    popupPlaceClass.showLoading(true);
    api.addCards({ name:title, link: img })
      .then(card => {
        const newCard = createCard(card);
        cardsList.prependItem(newCard);
        popupPlaceClass.close();
      })
      .catch((err) => console.log(`Ошибка при добавлении карточки: ${err}`))
      .finally(() => {
        popupProfileClass.showLoading(false, 'Cоздать')
      })
  }
});

function handleCardClick(name, link) {
  popupWithImage.open({ name, link });
}

function handleLikeClick(card) {
  if (card.isLiked()) {
    api.unlikeCard(card.getId())
      .then((newLikes) => {
        card.setLikes(newLikes);
      })
      .catch((err) =>
        console.log(`Не удалось снять лайк: ${err}`)
      );
  } else {
    api.likeCard(card.getId())
      .then((newLikes) => {
        card.setLikes(newLikes);
      })
      .catch((err) =>
        console.log(`Не удалось поставить лайк: ${err}`)
      );
  }
}

//Обработчик формы редактирования аватара
const popupAvatarClass = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: ({avatar}) => {
    popupAvatarClass.showLoading(true);
    api.editUserAvatar(avatar)
      .then((avatarLink) => {
        userInfo.setUserInfo(avatarLink);
        popupAvatarClass.close();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
       popupAvatarClass.showLoading(false, 'Cохранить')
      })
  }
})

// Обработчик формы подтверждения удаления
const popupDelete = new PopupWithConfirmation(".popup_type_assent");
function handleDeleteBtnClick(card) {
  popupDelete.open();
  popupDelete.setSubmitAction(() => {
    api.deleteCard(card.getId())
      .then(() => {
        card.deleteCard();
      })
      .catch(err => console.log(`Карточка не удалилась: ${err}`))
  })
}

contentFormValidation.enableValidation();
profileFormValidation.enableValidation();
avatarFormValidation.enableValidation();

popupDelete.setEventListeners();
popupProfileClass.setEventListeners();
popupPlaceClass.setEventListeners();
popupWithImage.setEventListeners();
popupAvatarClass.setEventListeners();

// Класс для работы с API
const api = new Api ({
  address:'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '8bcdd003-6ade-478d-94ee-ebb5cd09f115'
})

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([newUserData, cards]) => {
    userInfo.setUserInfo(newUserData);
    cardsList.renderItems(cards);
  })
  .catch((err) =>
    console.log(`${err}`)
  );

  
  