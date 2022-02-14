export default class UserInfo {
    // constructor({nameSelector, userInfoSelector, avatarSelector}) {
    //   this._name = document.querySelector(nameSelector);
    //   this._comment = document.querySelector(userInfoSelector);
    //   this._avatar = document.querySelector(avatarSelector);
    //   this._userId = "";
    // }

    constructor({nameSelector, userInfoSelector}) {
      this._name = document.querySelector(nameSelector);
      this._comment = document.querySelector(userInfoSelector);
      
    }
    
    // getUserInfo(){
    //   return {
    //     name: this._name.textContent,
    //     comment: this._comment.textContent,
    //     userId: this._userId
    //   };
    // }

    getUserInfo(){
      return {
        name: this._name.textContent,
        comment: this._comment.textContent,
      };
    }
    
    // setUserInfo({name, comment, avatar, _id}){
    //   this._name.textContent = name;
    //   this._comment.textContent = comment;
    //   this._avatar.src = avatar;
    //   this._userId = _id;
    // }

    setUserInfo({name, comment}){
      this._name.textContent = name;
      this._comment.textContent = comment;
    }
  }


  
  