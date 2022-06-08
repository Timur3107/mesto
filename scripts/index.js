// попапы
const popupCard = document.querySelector(".popup_add-card")
const popup = document.querySelector(".popup")
const popupPicture = document.querySelector(".popup_picture")

// формы
const formElement = popup.querySelector(".popup__form");
const formElementCard = popupCard.querySelector(".popup__form")

// поля ввода
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");
const nameInputCard = formElementCard.querySelector(".popup__input-name");
const linkInputCard = formElementCard.querySelector(".popup__input-link");


const profile = document.querySelector(".profile")
const profileName = profile.querySelector(".profile__name")
const profileAbout = profile.querySelector(".profile__about")

// кнопки открытия попапов
const profileButtonEdit = profile.querySelector(".profile__editButton")
const addCardButton = document.querySelector(".profile__addButton")
// кнопки закрытия попапов
const popupButtonClose = document.querySelector(".popup__closeButton")
const сloseButtonCard = popupCard.querySelector(".popup__closeButton")
const closeButtonPicture = popupPicture.querySelector(".popup__closeButton")

// открытие попапа (1)
function OpenPopup (popup) {
  popup.classList.add("popup_opened")
}
profileButtonEdit.addEventListener("click", event =>{
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  OpenPopup(popup)
})

// закрытие попапа (1)
function ClosePopup (popup) {
  popup.classList.remove("popup_opened")
}
popupButtonClose.addEventListener("click",event =>{
  ClosePopup(popup)
})

// отправка form (1)
function SavePopup (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  ClosePopup(popup)
}
formElement.addEventListener("submit",SavePopup)


// второй попап

// карточки
const cards = document.querySelector(".elements")
const cardTemplate = document.querySelector("#template__element").content
const card = cardTemplate.querySelector(".element").cloneNode(true)
const deleteCardButton = card.querySelector(".element__delete")

// открытие попапа (2)
addCardButton.addEventListener("click",event =>{
  OpenPopup(popupCard)
})
// закрытие попапа (2)
сloseButtonCard.addEventListener("click",event =>{
  ClosePopup(popupCard)
})
// отправка form (2)
function SavePopupCard (evt) {
  evt.preventDefault();
  const newCard = cardTemplate.cloneNode(true)
  newCard.querySelector(".element__title").textContent = nameInputCard.value
  newCard.querySelector(".element__image").src = linkInputCard.value
  newCard.querySelector(".element__image").alt = nameInputCard.value
  listenerCard(newCard)
  cards.prepend(newCard)
  nameInputCard.value = ""
  linkInputCard.value = ""
  ClosePopup(popupCard)
}
formElementCard.addEventListener("submit",SavePopupCard)

// лайк карточки
function likeButton (evt){
  evt.target.classList.toggle('element__likeButton_active')
}

// удаление карточки
function deleteCard (evt){
  evt.target.closest(".element").remove();
}

const initialCards = [
  {
    name: 'Эльбрус',
    link: 'images/Elbrus.jpeg'
  },
  {
    name: 'Чегет',
    link: 'https://images.unsplash.com/photo-1577978728453-3d444d6f96da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'ГЛЦ Абзаково',
    link: 'images/abzakovo.jpg'
  },
  {
    name: 'ГЛЦ Озеро Банное',
    link: 'images/bannoe.jpg'
  },
  {
    name: 'ГЛЦ Мраткино',
    link: 'images/mratkino.jpg'
  },
  {
    name: 'Зирган Тау',
    link: 'https://images.unsplash.com/photo-1603454211489-162865d96cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];

// Listeners
function listenerCard(element){
  element.querySelector(".element__likeButton").addEventListener("click",likeButton)
  element.querySelector(".element__delete").addEventListener("click",deleteCard)
  element.querySelector(".element__image").addEventListener("click",viewImage)
}

// обработка массива
initialCards.forEach((element)=>{
  const newCard = cardTemplate.cloneNode(true)
  newCard.querySelector(".element__image").alt = element.name
  newCard.querySelector(".element__title").textContent = element.name
  newCard.querySelector(".element__image").src = element.link

  listenerCard(newCard)
  cards.append(newCard)
})

// третий попап

// открытие попапа (3)
function viewImage(evt) {
  document.querySelector('.popup__image').src = evt.target.src
  document.querySelector('.popup__image').alt = evt.target.alt
  document.querySelector('.popup__title-picture').textContent = evt.target.alt
  OpenPopup(popupPicture)
}

// закрытие попапа (3)
closeButtonPicture.addEventListener("click", event =>{
  ClosePopup(popupPicture)
})
