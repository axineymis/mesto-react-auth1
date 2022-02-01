export default class UserInfo {
    constructor({nameSelector, userInfoSelector}){
      this._name = document.querySelector(nameSelector);
      this._comment = document.querySelector(userInfoSelector);
    }
    
    getUserInfo(){
      return {
        name: this._name.textContent,
        comment: this._comment.textContent
      }
    }
    
    setUserInfo({name, comment}){
      this._name.textContent = name;
      this._comment.textContent = comment;
    }
  }


  
  