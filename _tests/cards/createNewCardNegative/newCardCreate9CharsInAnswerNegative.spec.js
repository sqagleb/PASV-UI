import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import CardsPage from '../../../_pages/CardsPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import { modalCreateCard, negative4 } from '../../../_data/newCard.data';

describe('CREATE NEW CARD -- NEGATIVE WITH 9 CHARS IN ANSWER', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
    CardsPage.open();
  });

  it('should check if the group exists', () => {
    expect(CardsPage.groupName).to.exist;
  });

  it('should open modal form to create new card', () => {
    CardsPage.groupName.click();
    CardsPage.waitingForApproval.click();
    CardsPage.createNewCardBtn.click();
    browser.waitUntil( () => CardsPage.modalForm.isDisplayed());
  });

   it('should check if a correct modal form is open', () => {
    expect(CardsPage.modalFormTitle.getText()).equal(modalCreateCard);
  });

  it('should fill in text areas and check create button', () => {
    CardsPage.question.setValue(negative4.questionText);
    CardsPage.answer.setValue(negative4.answerText);
    expect(CardsPage.createBtn.isEnabled()).be.false;
  });

  after('close the modal form and logout', () => {
    CardsPage.modalFormCloseOut.click();
    LogoutPage.logout();
  });
});
