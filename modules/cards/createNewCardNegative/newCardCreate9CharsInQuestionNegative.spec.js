import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LogoutPage from "../../user/_page/LogoutPage";
import {modalCreateCard, negative3} from '../_data/newCard.data';
import { student } from '../../user/_data/user.data';

describe('CREATE NEW CARD -- NEGATIVE WITH 9 CHARS IN QUESTION', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
  });

  it('should check if the group exists', () => {
    expect(FlashCardsPage.groupName).to.exist;
  });

  it('should open modal form to create new card', () => {
    FlashCardsPage.groupName.click();
    FlashCardsPage.waitingForApproval.click();
    FlashCardsPage.createNewCardBtn.click();
    browser.waitUntil( () => FlashCardsPage.modalForm.isDisplayed());
  });

  it('should check if a correct modal form is open', () => {
    expect(FlashCardsPage.modalFormTitle.getText()).equal(modalCreateCard);
  });

  it('should fill in text areas and check Create button', () => {
    FlashCardsPage.question.setValue(negative3.questionText);
    FlashCardsPage.answer.setValue(negative3.answerText);
    expect(FlashCardsPage.createBtn.isEnabled()).be.false;
  });

  after('close the modal form and logout', () => {
    FlashCardsPage.modalFormCloseOut.click();
    LogoutPage.logout();
  });
});
