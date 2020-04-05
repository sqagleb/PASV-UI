import { expect } from 'chai';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { modalCreateCard, negative4 } from '../_data/newCard.data';
import { student } from '../../user/_data/user.data';
import LogoutPage from "../../user/_page/LogoutPage";

describe('CREATE NEW CARD -- NEGATIVE WITH 9 CHARS IN ANSWER', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
  });

  it('should check if the group exists', () => {
    expect(FlashCardsPage.groupName).to.exist;
  });

  it('should open modal form to create new card', () => {
    //MainPage.smartClick(FlashCardsPage.groupName);
    FlashCardsPage.groupName.click();
    FlashCardsPage.waitingForApproval.click();
    FlashCardsPage.createNewCardBtn.click();
    browser.waitUntil( () => FlashCardsPage.modalForm.isDisplayed());
  });

   it('should check if a correct modal form is open', () => {
    expect(FlashCardsPage.modalFormTitle.getText()).equal(modalCreateCard);
  });

  it('should fill in text areas and check create button', () => {
    FlashCardsPage.question.setValue(negative4.questionText);
    FlashCardsPage.answer.setValue(negative4.answerText);
    expect(FlashCardsPage.createBtn.isEnabled()).be.false;
  });

  after('close the modal form and logout', () => {
    FlashCardsPage.modalFormCloseOut.click();
    LogoutPage.logout();
  });
});
