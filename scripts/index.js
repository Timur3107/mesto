// попапы
const popupAddCard = document.querySelector(".popup_add-card")
const popupEditProfile = document.querySelector(".popup")
const popupViewPicture = document.querySelector(".popup_picture")

// формы
const formElement = popupEditProfile.querySelector(".popup__form");
const formElementCard = popupAddCard.querySelector(".popup__form")

// поля ввода
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");
const nameInputCard = formElementCard.querySelector(".popup__input-name");
const linkInputCard = formElementCard.querySelector(".popup__input-link");

// профиль
const profile = document.querySelector(".profile")
const profileName = profile.querySelector(".profile__name")
const profileAbout = profile.querySelector(".profile__about")

// кнопки открытия попапов
const buttonProfileEdit = profile.querySelector(".profile__edit-button")
const buttonAddCard = document.querySelector(".profile__add-button")
// кнопки закрытия попапов
const buttonPopupClose = document.querySelector(".popup__close-button")
const buttonCloseCard = popupAddCard.querySelector(".popup__close-button")
const buttonClosePicture = popupViewPicture.querySelector(".popup__close-button")

// открытие попапа (1)
function openPopup (popup) {
  popup.classList.add("popup_opened")
}
buttonProfileEdit.addEventListener("click", event =>{
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEditProfile)
})

// закрытие попапа (1)
function closePopup (popup) {
  popup.classList.remove("popup_opened")
}
buttonPopupClose.addEventListener("click",event =>{
  closePopup(popupEditProfile)
})

// отправка form (1)
function savePopupEditProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  closePopup(popupEditProfile)
}
formElement.addEventListener("submit",savePopupEditProfile)


// второй попап

// карточки
const cards = document.querySelector(".elements")
const cardTemplate = document.querySelector("#template-element").content
const card = cardTemplate.querySelector(".element").cloneNode(true)

// открытие попапа (2)
buttonAddCard.addEventListener("click",event =>{
  openPopup(popupAddCard)
})
// закрытие попапа (2)
buttonCloseCard.addEventListener("click",event =>{
  closePopup(popupAddCard)
})

// listeners
function listenActions(element){
  element.querySelector(".element__like-button").addEventListener("click",likeCard)
  element.querySelector(".element__delete").addEventListener("click",deleteCard)
  element.querySelector(".element__image").addEventListener("click",viewImage)
}

// обработка карточки
function renderСards (name, link){
  const newCard = cardTemplate.cloneNode(true)
  const newCardTitle = newCard.querySelector(".element__title")
  const newCardImage = newCard.querySelector(".element__image")
  newCardTitle.textContent = name
  newCardImage.alt = name
  newCardImage.src = link

  listenActions(newCard)
  cards.prepend(newCard)
}

// отправка form (2)
function savePopupAddCard (evt) {
  evt.preventDefault();
  renderСards(nameInputCard.value,linkInputCard.value)
  nameInputCard.value = ""
  linkInputCard.value = ""
  closePopup(popupAddCard)
}
formElementCard.addEventListener("submit",savePopupAddCard)

// лайк карточки
function likeCard (evt){
  evt.target.classList.toggle('element__like-button_active')
}

// удаление карточки
function deleteCard (evt){
  evt.target.closest(".element").remove();
}

// обработка массива
initialCards.reverse().forEach((element)=>{
  renderСards(element.name, element.link)
  // cards.append(newCard)
})

// третий попап

// открытие попапа (3)
function viewImage(evt) {
  const imagePopup = document.querySelector('.popup__image')
  const titlePicturePopup = document.querySelector('.popup__title-picture')
  imagePopup.alt = evt.target.alt
  imagePopup.src = evt.target.src
  titlePicturePopup.textContent = evt.target.alt

  openPopup(popupViewPicture)
}

// закрытие попапа (3)
buttonClosePicture.addEventListener("click", event =>{
  closePopup(popupViewPicture)
})
