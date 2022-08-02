import "./../pages/index.css"
import { initialCards } from "../components/initialCards.js"
import { Card } from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import {
  popupEditProfile,
  settings,
  formElementCard,
  nameInput,
  jobInput,
  buttonProfileEdit,
  buttonAddCard,
  cardTemplate
} from "../utils/constants.js"

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileAboutSelector: ".profile__about"
})

// попапы
const popupAddCardNew = new PopupWithForm (".popup_add-card", {
  callbackSubmitForm: (evt) => {
    evt.preventDefault();
    popupAddCardNew._getInputValues()
    const cardElement = new Card(popupAddCardNew._dataInputs, cardTemplate, viewImage)
    const newCard = cardElement.createCard()
    initialCardsSection.addItem(newCard)
    popupAddCardNew.close()
  }
})
popupAddCardNew.setEventListeners()

const popupEditProfileNew = new PopupWithForm(".popup_edit-profile",{
  callbackSubmitForm: (evt) =>{
    evt.preventDefault();
    const dataUser = popupEditProfileNew._getInputValues()
    userInfo.setUserInfo(dataUser)
    popupEditProfileNew.close()
  }
})
popupEditProfileNew.setEventListeners()

const popupViewPictureNew = new PopupWithImage(".popup_picture")
popupViewPictureNew.setEventListeners()

// валидация форм
const formValidateProfile = new FormValidator(settings, popupEditProfile)
formValidateProfile.enableValidation()
const formValidateCard = new FormValidator(settings, formElementCard)
formValidateCard.enableValidation()

// открытие попапа viewImage
function viewImage(evt) {
  popupViewPictureNew.open(evt.target)
}

// слушатели
// открытие попапа profile
buttonProfileEdit.addEventListener("click", ()=> {
  const dataUser = userInfo.getUserInfo()
  nameInput.value = dataUser.name
  jobInput.value = dataUser.about
  formValidateProfile.resetValidation()
  popupEditProfileNew.open()
})

// открытие попапа addCard
buttonAddCard.addEventListener("click", () => {
  formValidateCard.resetValidation()
  popupAddCardNew.open()
})

// обработка initialCards
const initialCardsSection = new Section({
  items: initialCards.reverse(),
  renderer: (card) =>{
    const cardElement = new Card(card, cardTemplate, viewImage)
    const newCard = cardElement.createCard()
    initialCardsSection.addItem(newCard)
  }
}, ".elements"
)
initialCardsSection.renderItems()
