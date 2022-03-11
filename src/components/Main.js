import editButtonPic from '../images/EditIcon.svg'
import addButtonPic from '../images/AddIcon.svg'
import '../index.css';
import React from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([ api.getUserInfo(), api.getCards()])
    .then(([userInfo, cards]) => {
      setUserName(userInfo.name)
      setUserDescription(userInfo.about)
      setUserAvatar(userInfo.avatar)
      setCards(cards);
    })
      .catch(err => `Не удалось получить карточки с сервера : ${err}`)
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__main" >
          <button type="button" className="profile__updateAvatar" ></button>
            <img className="profile__avatar" onClick={onEditAvatar} src={userAvatar} alt="Аватар"/>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}>
              <img  src={editButtonPic} alt="Кнопка редактирования"/>
            </button>
            <p className="profile__text">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add" type="button" onClick={onAddPlace}>
        <img src={addButtonPic} alt="Кнопка редактирования"/>
          </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>

    </main>
  )
}
export default Main;