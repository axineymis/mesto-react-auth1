export default class UserInfo {
    constructor({nameSelector, userInfoSelector}){
      this._nameSelector = nameSelector;
      this._userInfoSelector = userInfoSelector;
    }
    
    getUserInfo(){
      return {
        name: this._nameSelector.textContent,
        text: this._userInfoSelector.textContent
      }
    }
    
    setUserInfo({name, text}){
      this._nameSelector.textContent = name;
      this._userInfoSelector.textContent = text;
    }
  }


  
  