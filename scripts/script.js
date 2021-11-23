const formContent = document.querySelector('.popup');
let formElement = document.querySelector('.popup__content-form')
let nameInput = formContent.querySelector('.popup__input_type_name');
let textInput = formContent.querySelector('.popup__input_type_text');
const saveButton = formContent.querySelector('.popup__button');
const closeButton = formContent.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add');

function openPopup() {
    nameInput.value = profileName.textContent;
    textInput.value = profileText.textContent;
    formContent.classList.add("popup_open")
}

function closePopup() {
    formContent.classList.remove("popup_open")
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileText.textContent = textInput.value
    closePopup();
}
