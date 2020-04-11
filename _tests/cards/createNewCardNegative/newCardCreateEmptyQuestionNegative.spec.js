import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import FlashCardsPage from '../../../_pages/FlashCardsPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import {modalCreateCard, negative1} from '../../../_data/newCard.data';

describe('CREATE NEW CARD -- NEGATIVE WITH EMPTY QUESTION', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
  });

  it('should check if the group exists', () => {
    //const actual = FlashCardsPage.groupName;
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
    FlashCardsPage.question.setValue(negative1.questionText);
    FlashCardsPage.answer.setValue(negative1.answerText);
    expect(FlashCardsPage.createBtn.isEnabled()).be.false;
  });

  after('close the modal form and logout', () => {
    FlashCardsPage.modalFormCloseOut.click();
    LogoutPage.logout();
  });
});
