import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import MainPage from "../../_page/MainPage";
import FlashCardsPage from '../../_page/FlashCardsPage';
import LogoutPage from "../../user/_page/LogoutPage";
import { student } from '../../user/_data/user.data';
import { positive, pageTitle } from '../_data/newCard.data';

describe('CREATE NEW CARD -- POSITIVE', () => {
  before('should login and open `FlashCards` page', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
    browser.waitUntil( () => MainPage.header.getText() === pageTitle);
  });

  it('should open  and check that it is a correct group', () => {
    FlashCardsPage.groupName.click();
    browser.waitUntil( () => FlashCardsPage.titleOfCurrentGroup.getText() === positive.groupName);
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
