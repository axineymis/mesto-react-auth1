
class Card {

  // constructor(data, templateSelector, handleCardClick, userInfo, likeCardHandler, deleteCardHandler, cardId) {
  //   this._titleCard = data.name;
  //   this._linkCard = data.link;
  //   this._templateSelector = templateSelector;
  //   this._cardId = cardId;
  //   this._countLikes = data.likes;
  //   this._userId = userInfo;
  //   this._ownerId = data.owner._id;

  //   // Обработчики
  //   this._handleCardClick = handleCardClick;
  //   this._likeCardHandler = likeCardHandler;
  //   this._deleteCardHandler = deleteCardHandler;
  // }

  // _setEventListeners() {
  //   this._image.addEventListener('click', () => {
  //     this._handleCardClick(this._titleCard, this._linkCard);
  //   })
  //   this._deleteIcon.addEventListener('click', () => {
  //     this._deleteCardHandler();
  //   })
  //   this._likeButton.addEventListener('click', () => {
  //     this._likeCardHandler();
  //   })
  // }

  // generateCard() {
  //   //Формируем шаблон карточки
  //   this._template = document.querySelector(this._templateSelector).content;
  //   this._view = this._template.cloneNode(true);
  //   this._view = this._template.cloneNode(true);
  //   this._likeButton = this._view.querySelector('.element__like-icon');
  //   this._image = this._view.querySelector('.element__photo');
  //   this._deleteIcon = this._view.querySelector('.element__delete-btn');
  //   if (this._ownerId !== this._userId) {
  //     this._deleteIcon.remove();
  //   }
  //   // if ()
  //   this._likes =  this._view.querySelector('.element__like_counter');
  //   // Заполняем содержимое карточки
  //   this._image.src = this._linkCard;
  //   this._image.alt = this._titleCard;
  //   this._view.querySelector('.element__title').textContent = this._titleCard;
  //   this.renderLikes();
    
  //   this._setEventListeners();

  //   // Возвращаем готовую карточку
  //   return this._view;
  // }
  // getIdCard() {
  //   return this._cardId;
  // }

  // likedCard() {
  //   return this._countLikes.some(like => {
  //     return like._id === this._userId;
  //   });
  // }

  // renderLikes() {
  //   this._likes.textContent = this._countLikes.length;
  //   this.showLikes(this._userId)
  // }

  // showLikes() {
  //   if (this.likedCard(this._userId)) {
  //     this._likeButton.classList.add('element__like-button_active');
  //   } else {
  //     this._likeButton.classList.remove('element__like-button_active');
  //   }
  // }

  // setLikes(listLikes) {
  //   this._countLikes = listLikes;
  // }

  // deleteCard() {
  //   this._deleteIcon.closest('.element').remove();
  // }

    constructor(data, selector, handleCardClick, userInfo, handleDeleteBtnClick, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._handleDeleteBtnClick = handleDeleteBtnClick;
        this._selector = selector;
        this._likes = data.likes || [];
        this._id = data._id;
        this._isLiked = data.likes.some((like) => userInfo._userId === like._id);
        this._handleLikeClick = handleLikeClick;
        this._deletable = data.owner && data.owner._id === userInfo._userId;
        this._element = document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        // this._delBtn = this._element.querySelector(".element__delete-btn");
    } 

    generateCard() {
        this._delBtn = this._element.querySelector(".element__delete-btn");
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

    getId() {
      return this._id;
    }

    showDeleteBtn() {
      if (this._deletable) {
        this._delBtn.style.display = 'block';
      }
    }

    isLiked(){
      return this._isLiked;
    }

      _setEventListeners() {
        this._elemPhoto.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });
        this._elemLikeBtn = this._element.querySelector(".element__like-button");
        this._elemLikeBtn.addEventListener('click', this._handleLike);
        this._delBtn.addEventListener('click', () => { this._handleDeleteBtnClick(this) });
        // this._cardLikeBtn.addEventListener('click', () => { this._handleLikeClick(this)});
      }

      deleteCard = () => {
        this._element.remove();
      }

      //  функция изменения вида лайка
      changeLikeBtnColor(){
        if(this._isLiked){
          this._cardLikeBtn.classList.remove("element__like-button_active");
        }else{
          this._cardLikeBtn.classList.add("element__like-button_active");
        }
      }

      likeAmount = (response) => {
        this.changeLikeBtnColor();
        this._isLiked = !this._isLiked;
        this._likes = response.likes;
        this._element.querySelector(".element__like_counter").textContent = response.likes.length;
      }

      
 }
export default Card;