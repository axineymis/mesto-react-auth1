const formContent = document.querySelector('.popup');
let formElement = document.querySelector('.popup__content-form')
let nameInput = formContent.querySelector('.popup__input_type_name');
let textInput = formContent.querySelector('.popup__input_type_text');
const saveButton = formContent.querySelector('.popup__button');
const closeButton = formContent.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add');
 
const popupProfile = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupClose =popupAdd.querySelector(".popup__close-button");
const popupPic = document.querySelector('.popup_type_img');
const popupPicClose = popupPic.querySelector('.popup__close-button');
const elemPic = document.querySelector('element');

// let titleImput = formContent.querySelector('.popup__input_type_title');
// let imgImput = formContent.querySelector('.popup__input_type_img');
let elementTitle = document.querySelector('.element__title');
let elementPic = document.querySelector('.element__photo');
const saveImgBtn = document.querySelector('.popup_add-button');
const cardElements = document.querySelector(".elements");
const templateEl = document.querySelector(".template__card");
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  function render() {
    const html = initialCards
      .map((item, idx, arr) => {
        return getItem(item);
      });
  
      cardElements.append(...html);
  }
  

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const cardTitle = newItem.querySelector('.element__title');
    const cardPhoto = newItem.querySelector('.element__photo');
    const cardLikeBtn = newItem.querySelector('.element__like-button');
    const deleteBtn = newItem.querySelector('.element__delete-btn');
    cardTitle.textContent = item.name;
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;
    deleteBtn.addEventListener('click', handDelete);
    cardPhoto.addEventListener('click', handlePopupImg);
    cardLikeBtn.addEventListener('click', like(cardLikeBtn));
    return newItem;
};

render();

    function like(cardLikeBtn) {
        cardLikeBtn.addEventListener('click', () => cardLikeBtn.classList.toggle("element__like-button_active"));
      }



function handDelete(evt) {
    const targetCard = evt.target;
    const listItem = targetCard.closest(".element");
    listItem.remove();
  }

  function handlePopupImg(evt) {
    const targetImg = evt.target;
    const elementImg = targetImg.closest(".element");
    const bigPicture = document.querySelector(".popup__big-img")
    const bigPictureCaption = document.querySelector(".popup__caption");
    bigPictureCaption.textContent = elementImg.textContent;
    bigPicture.src = elementImg.querySelector(".element__photo").src;
    bigPicture.alt = elementImg.textContent;
  }
  

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    textInput.value = profileText.textContent;
    popupProfile.classList.add("popup_open")
}

function closePopupEdit() {
    popupProfile.classList.remove("popup_open")
}

editButton.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', closePopupEdit);
formElement.addEventListener('submit', formSubmitHandler);

function openPopupAdd() {
    popupAdd.classList.add("popup_open")
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_open")
}

addButton.addEventListener('click', openPopupAdd);
popupClose.addEventListener('click', closePopupAdd);
saveImgBtn.addEventListener('click', formSubmitPicture);

function openPopupImg() {
    popupPic.classList.add('popup_open')
}

function closePopupImg() {
    popupPic.classList.remove('popup_open')
}

cardElements.addEventListener('click', openPopupImg);
popupPicClose.addEventListener('click', closePopupImg);



function formSubmitPicture(evt) {
    evt.preventDefault();
    const titleImput = popupAdd.querySelector('.popup__input_type_title');
    const newCardTitle = titleImput.value
    const imgImput = popupAdd.querySelector('.popup__input_type_img');
    const newCardLink = imgImput.value
    const newCard = getItem({ name: newCardTitle, link: newCardLink, alt:  newCardTitle });
    cardElements.prepend(newCard);
    closePopupAdd();
    titleImput.value = '';
    imgImput.value = '';
  }

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileText.textContent = textInput.value
    closePopupEdit();
}



