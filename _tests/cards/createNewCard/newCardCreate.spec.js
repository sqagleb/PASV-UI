import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import MainPage from "../../../_pages/MainPage";
import FlashCardsPage from '../../../_pages/FlashCardsPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import { positive, pageTitle } from '../../../_data/newCard.data';

describe('CREATE NEW CARD -- POSITIVE', () => {
  before('should login and open `FlashCards` page', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
    MainPage.verifyElementText(MainPage.header, pageTitle);
    //browser.waitUntil( () => MainPage.header.getText() === pageTitle);
  });

  it('should open  and check that it is a correct group', () => {
    FlashCardsPage.groupName.click();
    MainPage.verifyElementText(MainPage.header, positive.groupName);
    //browser.waitUntil( () => FlashCardsPage.titleOfCurrentGroup.getText() === positive.groupName);
  });

  it('should click `Waiting for approval` link', () => {
    FlashCardsPage.waitingForApproval.click();
    browser.waitUntil( () => FlashCardsPage.createNewCardBtn.isDisplayed());
    FlashCardsPage.createNewCardBtn.click();
    browser.waitUntil( () => FlashCardsPage.modalForm.isDisplayed());
  });

  it('should fill in text areas and click button', () => {
    FlashCardsPage.question.setValue(positive.questionText);
    FlashCardsPage.answer.setValue(positive.answerText);
    FlashCardsPage.createBtn.click();
    browser.waitUntil( () => FlashCardsPage.waitingForApproval.isDisplayed());
  });

  it('should check if a new card was created', () => {
    expect(FlashCardsPage.lastCreatedCard.getText()).equal(positive.questionText);
  });

  it('should check if a new card was created in the correct group', () => {
    expect(FlashCardsPage.titleOfCurrentGroup.getText()).equal(positive.groupName);
  });

  after('logout', () => {
    LogoutPage.logout();
  });

});
