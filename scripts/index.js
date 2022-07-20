import { initialCards } from "./initialCards.js"
import { Card } from "./card.js"
import { FormValidator } from "./FormValidator.js"

// попапы
const popupAddCard = document.querySelector(".popup_add-card")
const popupEditProfile = document.querySelector(".popup")
const popupViewPicture = document.querySelector(".popup_picture")
const popupList = document.querySelectorAll(".popup")

// настройки для класса FormValidator
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

// формы
const formElementProfile = popupEditProfile.querySelector(".popup__form");
const formElementCard = popupAddCard.querySelector(".popup__form")

const formValidateProfile = new FormValidator(settings, popupEditProfile)
formValidateProfile.enableValidation()
const formValidateCard = new FormValidator(settings, formElementCard)
formValidateCard.enableValidation()

// поля ввода
const nameInput = formElementProfile.querySelector(".popup__input-name");
const jobInput = formElementProfile.querySelector(".popup__input-job");
const nameInputCard = formElementCard.querySelector(".popup__input-name");
const linkInputCard = formElementCard.querySelector(".popup__input-link");

// профиль
const profile = document.querySelector(".profile")
const profileName = profile.querySelector(".profile__name")
const profileAbout = profile.querySelector(".profile__about")

// кнопки открытия попапов
const buttonProfileEdit = profile.querySelector(".profile__edit-button")
const buttonAddCard = document.querySelector(".profile__add-button")

// кнопка sunmit попапа addCard
const buttonSubmitCard = popupAddCard.querySelector(".popup__save-button")

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
popupList.forEach(function (popup) {
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
  popup.querySelector(".popup__close-button").addEventListener("click", event => {
    closePopup(popup)
  })
})

// обработка карточки
function renderСard(card) {
  const newCard = new Card(card, cardTemplate, viewImage)
  return newCard.createCard();
  // cards.prepend(newCard)
}

// создание карточки
function createCard(card) {
  const newCard = renderСard(card)
  renderСard(card)
  cards.prepend(newCard)
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
  createCard({ name: nameInputCard.value, link: linkInputCard.value })
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
  formValidateProfile.resetValidation()
  openPopup(popupEditProfile)
})

// открытие попапа (2)
buttonAddCard.addEventListener("click", event => {
  openPopup(popupAddCard)
  formValidateCard.resetValidation()
})

// формы
formElementProfile.addEventListener("submit", savePopupEditProfile)
formElementCard.addEventListener("submit", savePopupAddCard)

// обработка массива
initialCards.reverse().forEach((element) => {
  createCard(element)
})
