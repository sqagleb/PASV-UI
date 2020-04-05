import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import MainPage from "../../_page/MainPage";
import FlashCardsPage from '../../_page/FlashCardsPage';
import LogoutPage  from '../../user/_page/LogoutPage';
import { student } from '../../user/_data/user.data';
import {waitingForApprovalData, pageTitle, positive} from '../_data/newCard.data';

describe('WAITING FOR APPROVAL', () => {
  before('login as a student and click `Cards` link', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    browser.waitUntil( () => MainPage.header.getText()=== pageTitle);
  });

  it('should find group `Test Group` and check header', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    expect(MainPage.header.getText()).eq(waitingForApprovalData.header);
  });

  it('should click `Waiting for approval` and check title', () => {
    FlashCardsPage.waitingForApproval.click();
    expect(FlashCardsPage.waitingForApproval.getText()).eq(waitingForApprovalData.title);
  });

  it('should click CreateNewCard Button', () => {
    FlashCardsPage.createNewCardBtn.click();
    browser.waitUntil(() => FlashCardsPage.modalFormTitle.getText() === waitingForApprovalData.moduleTitle);
  });

  it('should create flash card', () => {
    FlashCardsPage.question.setValue(positive.questionText);
    FlashCardsPage.answer.setValue(positive.answerText);
    expect(FlashCardsPage.createBtn.isEnabled()).be.true;
    FlashCardsPage.createBtn.click();
    browser.waitUntil( () => FlashCardsPage.lastCreatedCard.getText() === positive.questionText );
  });

  it('should check if the card has right creator name', () => {
    expect(FlashCardsPage.lastCreatedCardCreator.getText()).eq(LogoutPage.logoutDropdown.getText());
  });

  it('should check if the card has right status', () => {
    expect(FlashCardsPage.lastCreatedCardStatus.getText()).eq(waitingForApprovalData.cardStatus);
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});



  // it('should click `Create new Card` button', () => {
  //   CardsWaitingForApprovalPage.CreateCard.click();
  // });

  // it('should verify a modal window title', () => {
  //   browser.waitUntil(() => CardsWaitingForApprovalPage.ModuleWindowTitle.getText() === waitingForApprovalData.moduleTitle);
  // });
  //
  // it('should verify that `Question` text area is present', () => {
  //   expect(CardsWaitingForApprovalPage.ModuleWindowQuestion.isDisplayed());
  // });
  //
  // it('should verify that `Answer` text area is present', () => {
  //   expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed());
  // });
  //
  // it('should verify that `Create` button is present', () => {
  //   expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed());
  // });
  //
  // it('should verify that `Close` button is present', () => {
  //   expect(CardsWaitingForApprovalPage.ModuleWindowClose.isDisplayed());
  // });


  //
  // it('should check if the card has right status', () => {
  //   expect(CardsWaitingForApprovalPage.lastCreatedCardStatus.getText()).eq(waitingForApprovalData.cardStatus);
  // });
  //
  // it('should check if a new card was created in the correct group', () => {
  //   expect(FlashCardsPage.titleOfCurrentGroup.getText()).equal(positive.groupName);
  // });



  // it('should fill in the `Answer` text area', () => {
  //   FlashCardsPage.answer.setValue(positive.answerText);
  // });
  //
  // it('should check if `Create` button is enabled', () => {
  //   expect(FlashCardsPage.createBtn.isEnabled()).be.true;
  // });
  //
  // it('should click `Create` button', () => {
  //   FlashCardsPage.createBtn.click();
  //   browser.pause(3000);
  // });

  // it('should check if the card was created', () => {
  //   expect(FlashCardsPage.lastCreatedCard.getText()).equal(positive.questionText);
  // });
/*
  it('should check if the card has right `Question`', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardQuestion.getText()).eq(positive.questionText);
  });

  it('should check if the card has right `Answer`', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardAnswer.getText()).eq(positive.answerText);
  });

  it('should check if the card has right creator name', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardCreator.getText()).eq(
      Logout.logoutDropdown.getText(),
    );
  });

  it('should check if the card has right status', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardStatus.getText()).eq(waitingForApprovalData.cardStatus);
  });

 */

