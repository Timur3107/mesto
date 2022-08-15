export default class UserInfo {
  constructor({profileName, profileAbout, profileAvatar}) {
    this._profileName = document.querySelector(profileName)
    this._profileAbout = document.querySelector(profileAbout)
    this._profileAvatar = document.querySelector(profileAvatar)
  }

  getUserInfo(){
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent
    }
  }

  setUserInfo(data){
    this._profileName.textContent = data.name
    this._profileAbout.textContent = data.about
    this._profileAvatar.src = data.avatar
    this.myId = data._id
  }
}
