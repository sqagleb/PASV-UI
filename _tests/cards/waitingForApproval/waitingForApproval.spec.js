import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import Menu from '../../../_pages/Menu';
import MainPage from "../../../_pages/MainPage";
import CardsPage from '../../../_pages/CardsPage';
import LogoutPage  from '../../../_pages/LogoutPage';
import { student } from '../../../_data/_user.data';
import {waitingForApprovalData, pageTitle, positive, modalCreateCard} from '../../../_data/newCard.data';

describe('WAITING FOR APPROVAL', () => {
  before('login as a student and click `Cards` link', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    MainPage.verifyElementText(MainPage.header, pageTitle);
  });

  it('should find group `Test Group` and check header', () => {
    CardsPage.linkToGroup.scrollIntoView();
    CardsPage.linkToGroup.click();
    expect(MainPage.header.getText()).eq(positive.groupName);
  });

  it('should click `Waiting for approval` and check title', () => {
    CardsPage.waitingForApproval.click();
    expect(CardsPage.waitingForApproval.getText()).eq(waitingForApprovalData.title);
  });

  it('should click CreateNewCard Button', () => {
    CardsPage.createNewCardBtn.click();
    MainPage.verifyElementText(CardsPage.modalFormTitle, modalCreateCard);
  });

  it('should create flash card', () => {
    CardsPage.question.setValue(positive.questionText);
    CardsPage.answer.setValue(positive.answerText);
    expect(CardsPage.createBtn.isEnabled()).be.true;
    CardsPage.createBtn.click();
    MainPage.verifyElementText(CardsPage.lastCreatedCard, positive.questionText);
  });

  it('should check if the card has right creator name', () => {
    expect(CardsPage.lastCreatedCardCreator.getText()).eq(LogoutPage.logoutDropdown.getText());
  });

  it('should check if the card has right status', () => {
    expect(CardsPage.lastCreatedCardStatus.getText()).eq(waitingForApprovalData.cardStatus);
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});

