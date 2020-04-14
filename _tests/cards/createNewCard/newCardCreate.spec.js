import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import MainPage from "../../../_pages/MainPage";
import CardsPage from '../../../_pages/CardsPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import { positive, pageTitle } from '../../../_data/newCard.data';

describe('CREATE NEW CARD -- POSITIVE', () => {
  before('should login and open `FlashCards` page', () => {
    LoginPage.login(student);
    CardsPage.open();
    MainPage.verifyElementText(MainPage.header, pageTitle);
  });

  it('should open  and check that it is a correct group', () => {
    CardsPage.groupName.click();
    MainPage.verifyElementText(MainPage.header, positive.groupName);
  });

  it('should click `Waiting for approval` link', () => {
    CardsPage.waitingForApproval.click();
    browser.waitUntil( () => CardsPage.createNewCardBtn.isDisplayed());
    CardsPage.createNewCardBtn.click();
    browser.waitUntil( () => CardsPage.modalForm.isDisplayed());
  });

  it('should fill in text areas and click button', () => {
    CardsPage.question.setValue(positive.questionText);
    CardsPage.answer.setValue(positive.answerText);
    CardsPage.createBtn.click();
    browser.waitUntil( () => CardsPage.waitingForApproval.isDisplayed());
  });

  it('should check if a new card was created', () => {
    expect(CardsPage.lastCreatedCard.getText()).equal(positive.questionText);
  });

  it('should check if a new card was created in the correct group', () => {
    expect(MainPage.header.getText()).equal(positive.groupName);
  });

  after('logout', () => {
    LogoutPage.logout();
  });

});
