import "./../pages/index.css"
import { Card } from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import {
  popupEditProfile,
  settings,
  initialCards,
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
  callbackSubmitForm: (data) => {
    const dataNew = {
      name: data.name,
      link: data.link
    }
    initialCardsSection.addItem(createCard(dataNew))
    popupAddCardNew.close()
  }
})
popupAddCardNew.setEventListeners()

const popupEditProfileNew = new PopupWithForm(".popup_edit-profile",{
  callbackSubmitForm: ({name, about}) =>{
    userInfo.setUserInfo({name, about})
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

function createCard(data){
  const cardElement = new Card(data, cardTemplate, viewImage)
  const newCard = cardElement.createCard()
  return newCard
}

// открытие попапа viewImage
function viewImage(image) {
  popupViewPictureNew.open(image)
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
