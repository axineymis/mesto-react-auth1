
class Card {
  constructor(data, selector, handleCardClick, userInfo, handleDeleteBtnClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._likes = data.likes;
    this._id = data._id;
    this._isLiked = data.likes.some((like) => userInfo._userId === like._id);
    this._checkOwnerCard = data.owner && data.owner._id === userInfo._userId;  
    this._element = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);

    //Обработчики
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick; 
    this._handleLikeClick = handleLikeClick;   
  } 

  _setEventListeners() {
    this._elemPhoto.addEventListener('click', () => { this._handleCardClick(this._name, this._link);});
    this._deleteIcon.addEventListener('click', () => { this._handleDeleteBtnClick(this) });
    this._cardLikeBtn.addEventListener('click', () => { this._handleLikeClick(this)});
  }

  // формирование шаблона карточки
  generateCard() {
    this._deleteIcon = this._element.querySelector(".element__delete-btn");
    this._cardLikeBtn = this._element.querySelector(".element__like-button");
    this._elemPhoto = this._element.querySelector('.element__photo');
    this._elemPhoto.src = this._link;
    this._elemPhoto.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector(".element__like_counter").textContent = this._likes.length;
    this.showDeleteBtn();
    this._setEventListeners();
      if(this._isLiked) {
        this._cardLikeBtn.classList.add("element__like-button_active");
      }
      return this._element;
  }

  //Получаем id карточки
  getId() {
    return this._id;
  }

  // Убираем иконку удаления с карточки другого пользователя
  showDeleteBtn() {
    if (!this._checkOwnerCard) {
      this._deleteIcon.style.display = 'none';
    }
  }

  // Удаление карточки
  deleteCard = () => {
    this._element.remove();
  }

  isLiked(){
    return this._isLiked;
  }

  //  функция изменения вида лайка
  showLikes(){
    if(this._isLiked){
      this._cardLikeBtn.classList.remove("element__like-button_active");
    }else{
      this._cardLikeBtn.classList.add("element__like-button_active");
    }
  }

  setLikes = (response) => {
    this.showLikes();
    this._isLiked = !this._isLiked;
    this._likes = response.likes;
    this._element.querySelector(".element__like_counter").textContent = response.likes.length;
  }    
}
export default Card;