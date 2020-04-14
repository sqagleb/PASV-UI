import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import MainAndCompactViewPage from '../../../_pages/CardsMainAndCompactViewPage';
import CardsPage from '../../../_pages/CardsPage';
import MainPage from "../../../_pages/MainPage";
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import {pageTitle, positive, waitingForApprovalData} from '../../../_data/newCard.data';

describe('CARDS MAIN VIEW AND COMPACT VIEW', () => {
  before('login as a student', () => {
    LoginPage.login(student);
    CardsPage.open();
    MainPage.verifyElementText(MainPage.header, pageTitle);
  });

  it('should find `Test Group` group and click', () => {
    CardsPage.linkToGroup.scrollIntoView();
    CardsPage.linkToGroup.click();
    MainPage.verifyElementText(MainPage.header, positive.groupName);
  });

  it('should redirect to `Main view`', () => {
    MainAndCompactViewPage.mainView.click();
    expect(MainAndCompactViewPage.mainViewActive.isExisting()).equal(true);
  });

  it('should check that question appears under `Main view`', () => {
    expect(MainAndCompactViewPage.cardQuestion.isExisting()).equal(true);
  });

  it('should check that answer appears under question', () => {
    expect(MainAndCompactViewPage.cardAnswer.isExisting()).equal(true);
  });

  it('should redirect to `Compact view`', () => {
    MainAndCompactViewPage.compactView.click();
    expect(MainAndCompactViewPage.compactViewActive.isExisting()).equal(true);
  });

  it('should check that answer does not appear before hovering over the question', () => {
    expect(MainAndCompactViewPage.answerText.isExisting()).equals(false);
  });

  it('should check that answer appears when hovering over the question', () => {
    MainAndCompactViewPage.questionText.moveTo();
    expect(MainAndCompactViewPage.answerText.isExisting()).equals(true);
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});
