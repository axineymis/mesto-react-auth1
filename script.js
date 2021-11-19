let formContent = document.querySelector('.popup');
let nameInput = formContent.querySelector('.popup__name');
let textInput = formContent.querySelector('.popup__text');
const saveButton = document.querySelector('.popup__button');
const closeButton = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add');

function openPopup() {
    nameInput.value = profileName.textContent;
    textInput.value = profileText.textContent;
    formContent.style.display = 'flex'
}

function closePopup() {
    formContent.style.display = 'none'
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formContent.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    closePopup();
    profileName.textContent = nameInput.value
    profileText.textContent = textInput.value
}



