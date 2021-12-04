const formContent = document.querySelector('.popup');
const formElement = document.querySelector('.popup__content-form')
const nameInput = formContent.querySelector('.popup__input_type_name');
const textInput = formContent.querySelector('.popup__input_type_text');
const saveButton = formContent.querySelector('.popup__button');
const closeButton = formContent.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add');
 
const popupProfile = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupClose =popupAdd.querySelector(".popup__close-button");
const popupPic = document.querySelector('.popup_type_img');
const popupPicClose = popupPic.querySelector('.popup__close-button');
const elemPic = document.querySelector('element');

const elementTitle = document.querySelector('.element__title');
const elementPic = document.querySelector('.element__photo');
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
    cardLikeBtn.addEventListener('click',(evt) => {
        evt.stopPropagation()
        like(cardLikeBtn)
        // console.log(evt)
    });
    return newItem;
};

render();

function like(LikeBtn) {
    LikeBtn.classList.toggle('element__like-button_active');
} 

function handDelete(evt) {
    evt.stopPropagation()
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
    openPopupImg();
  }
  
  function formSubmitPicture(evt) {
    evt.preventDefault();
    const titleInput = popupAdd.querySelector('.popup__input_type_title');
    const newCardTitle = titleInput.value
    const imgInput = popupAdd.querySelector('.popup__input_type_img');
    const newCardLink = imgInput.value
    const newCard = getItem({ name: newCardTitle, link: newCardLink, alt:  newCardTitle });
    cardElements.prepend(newCard);
    closePopupAdd();
    titleInput.value = '';
    imgInput.value = '';
  }

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileText.textContent = textInput.value
    closePopupEdit();
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

popupPicClose.addEventListener('click', closePopupImg);





