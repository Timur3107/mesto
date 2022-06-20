// попапы
const popupAddCard = document.querySelector(".popup_add-card")
const popupEditProfile = document.querySelector(".popup")
const popupViewPicture = document.querySelector(".popup_picture")
const popupList = document.querySelectorAll(".popup")

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

// карточки
const cards = document.querySelector(".elements")
const cardTemplate = document.querySelector("#template-element").content

const imagePopup = document.querySelector('.popup__image')
const titlePicturePopup = document.querySelector('.popup__title-picture')

// функции
// открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", closePopupEscape)
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupEscape)
}

// закрытие попапа на Escape
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

// добавление слушателя на overlay и кнопку закрытия
popupList.forEach(function (popup){
  popup.addEventListener("click", function(evt){
    if(evt.target === popup){
      closePopup(popup)
    }
  })
  popup.querySelector(".popup__close-button").addEventListener("click", event =>{
    closePopup(popup)
  })
})

// listeners
function listenActions(element) {
  element.querySelector(".element__like-button").addEventListener("click", likeCard)
  element.querySelector(".element__delete").addEventListener("click", deleteCard)
  element.querySelector(".element__image").addEventListener("click", viewImage)
}

// обработка карточки
function renderСard(newCard) {
  // listenActions(newCard)
  cards.prepend(newCard)
}

// создание карточки
function createCard(card) {
  const newCard = cardTemplate.cloneNode(true)
  const newCardTitle = newCard.querySelector(".element__title")
  const newCardImage = newCard.querySelector(".element__image")
  newCardTitle.textContent = card.name
  newCardImage.alt = card.name
  newCardImage.src = card.link
  listenActions(newCard)
  renderСard(newCard)
}

// лайк карточки
function likeCard(evt) {
  evt.target.classList.toggle('element__like-button_active')
}

// удаление карточки
function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

// отправка form (1)
function savePopupEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  closePopup(popupEditProfile)
}

// отправка form (2)
function savePopupAddCard(evt) {
  evt.preventDefault();
  createCard({name: nameInputCard.value, link: linkInputCard.value})
  formElementCard.reset();
  closePopup(popupAddCard)
}

// открытие попапа (3)
function viewImage(evt) {
  imagePopup.alt = evt.target.alt
  imagePopup.src = evt.target.src
  titlePicturePopup.textContent = evt.target.alt

  openPopup(popupViewPicture)
}


// слушатели
// открытие попапа (1)
buttonProfileEdit.addEventListener("click", event => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEditProfile)
})

// открытие попапа (2)
buttonAddCard.addEventListener("click", event => {
  openPopup(popupAddCard)
})

// формы
formElement.addEventListener("submit", savePopupEditProfile)
formElementCard.addEventListener("submit", savePopupAddCard)

// обработка массива
initialCards.reverse().forEach((element) => {
  createCard(element)
})
