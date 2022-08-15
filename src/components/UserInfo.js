export default class UserInfo {
  constructor({profileNameSelector, profileAboutSelector, profileAvatarSelector}) {
    this._profileNameSelector = document.querySelector(profileNameSelector)
    this._profileAboutSelector = document.querySelector(profileAboutSelector)
    this._profileAvatarSelector = document.querySelector(profileAvatarSelector)
  }

  getUserInfo(){
    return {
      name: this._profileNameSelector.textContent,
      about: this._profileAboutSelector.textContent
    }
  }

  setUserInfo(data){
    this._profileNameSelector.textContent = data.name
    this._profileAboutSelector.textContent = data.about
    this._profileAvatarSelector.src = data.avatar
    this.myId = data._id
  }
}
