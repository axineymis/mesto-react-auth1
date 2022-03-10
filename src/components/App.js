import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'; ;

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' })
  }

  function handleCardClick(cardData) {
    setSelectedCard({ name: cardData.name, link: cardData.link });
  }
  
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title='Редактировать профиль'
          name='info'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            id="input-name"
            className="popup__input popup__input_type_name"
            type="text" name="name"
            defaultValue=""
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span 
            id='input-name-error'
            className="error">
          </span>
         
          <input 
            id="input-text"
            className="popup__input popup__input_type_text"
            type="text"
            name="about"
            defaultValue=""
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required />
          <span
            id='input-text-error'
            className="error">
          </span>
        </PopupWithForm>
        <PopupWithForm
          title='Новое место'
          name='place'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText='Создать'
        >
          <input 
            id="input-add"
            className="popup__input popup__input_type_title"
            type="text" name="title"
            defaultValue=""
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            id='input-add-error'
            className="error">
          </span>
          <input
            id="input-img"
            className="popup__input popup__input_type_img"
            type="url"
            name="img"
            defaultValue="" 
            placeholder="Ссылка на картинку"
            required />
          <span
            id='input-img-error'
            className="error">
          </span>
        </PopupWithForm>
        <PopupWithForm
          title='Обновить аватар'
          name='avatar'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            id="avatar-link"
            className="popup__input popup__input_name_link-avatar"
            type="url"
            name="avatar"
            defaultValue=""
            placeholder="Ссылка на изображение"
            required
          />
          <span
            id='avatar-link-error'
            className="error">
          </span>
        </PopupWithForm>
        <PopupWithForm
          title='Вы уверены?'
          name='element'
          buttonText='Да'
        >
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
