export class Card {
  constructor(data, templateElement, handleCardClick, handleDeleteCardClick, myId, {handleLikeCardClick}) {
    this._data = data
    this._name = data.name
    this._link = data.link
    this._id = data._id
    this._templateElement = templateElement
    this._handleCardClick = handleCardClick
    this._handleDeleteCardClick = handleDeleteCardClick
    this._myId = myId
    this._handleLikeCardClick = handleLikeCardClick
  }

  _listenActions() {
    this._buttonLike.addEventListener("click",()=>{this._handleLikeCardClick()})
    this._buttonDelete.addEventListener("click",()=>{this._handleDeleteCardClick(this._card, this._id)})
    this._imageCard.addEventListener("click",()=>{this._handleCardClick({ name:this._name, link:this._link })})
  }

  createCard() {
    this._card = this._templateElement.querySelector('.element').cloneNode(true)
    this._buttonLike = this._card.querySelector(".element__like-button")
    this._buttonDelete = this._card.querySelector(".element__delete")
    this._titleCard = this._card.querySelector(".element__title")
    this._titleCard.textContent = this._name
    this._imageCard = this._card.querySelector(".element__image")
    this._imageCard.alt = this._name
    this._imageCard.src = this._link
    this._likesCounter = this._card.querySelector(".element__counter-likes")
    this._listenActions()
    this._checkMyCard()
    return this._card
  }

  _checkMyCard(){
    if(this._data.owner._id !== this._myId){
      this._buttonDelete.remove()
    }
  }
  setLikes(data){
    this._isLiked = data.likes.some((obj)=>{
      return obj._id === this._myId
    })
    this._likesCounter.textContent = data.likes.length
    this._isLiked ? this._buttonLike.classList.add('element__like-button_active') : this._buttonLike.classList.remove('element__like-button_active')
  }

  isLiked(){
    return this._isLiked
  }
}
