export default class UserInfo {
    constructor({nameSelector, userInfoSelector, avatarSelector}) {
      this._name = document.querySelector(nameSelector);
      this._about = document.querySelector(userInfoSelector);
      this._avatar = document.querySelector(avatarSelector);
      this._userId = "";
    }

    getUserInfo(){
      return {
        name: this._name.textContent,
        about: this._about.textContent,
        userId: this._userId
      };
    }

    setUserInfo({name, about, avatar, _id}){
      this._name.textContent = name;
      this._about.textContent = about;
      if (avatar) {
        this._avatar.src = avatar;
      }
      this._userId = _id;
    }

    // setUserInfo({name, comment}){
    //   this._name.textContent = name;
    //   this._comment.textContent = comment;
    // }
  }


  
  