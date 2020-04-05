import { expect } from 'chai';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { positive, pageTitle } from '../_data/newCard.data';
import { student } from '../../user/_data/user.data';
import LogoutPage from "../../user/_page/LogoutPage";
import MainPage from "../../_page/MainPage";

describe('CREATE NEW CARD -- POSITIVE', () => {
  before('should login and open `FlashCards` page', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
    browser.pause(3000);
    //browser.waitUntil( () => MainPage.header.getText() === pageTitle);
  });

  it('should check if an opened page is the `FlashCards` group page', () => {
    expect(MainPage.header.getText()).equal(pageTitle);
  });

  it('should open  and check that it is a correct group', () => {
    FlashCardsPage.groupName.click();
    browser.pause(3000);
    expect(FlashCardsPage.titleOfCurrentGroup.getText()).equal(positive.groupName);
  });

  it('should click `Waiting for approval` link', () => {
    FlashCardsPage.waitingForApproval.click();
    browser.pause(3000);
    FlashCardsPage.createNewCardBtn.click();
    browser.waitUntil( () => FlashCardsPage.modalForm.isDisplayed());
  });

  it('should fill in the `Question` text area', () => {
    FlashCardsPage.question.setValue(positive.questionText);
    FlashCardsPage.answer.setValue(positive.answerText);
    FlashCardsPage.createBtn.click();
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
