import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import MainAndCompactViewPage from '../_page/CardsMainAndCompactViewPage';
import FlashCardsPage from '../../_page/FlashCardsPage';
import MainPage from "../../_page/MainPage";
import LogoutPage from "../../user/_page/LogoutPage";
import { student } from '../../user/_data/user.data';
import {pageTitle, waitingForApprovalData} from '../_data/newCard.data';

describe('CARDS MAIN VIEW AND COMPACT VIEW', () => {
  before('login as a student', () => {
    LoginPage.login(student);
    FlashCardsPage.open();
    browser.waitUntil( () => MainPage.header.getText() === pageTitle);
  });

  it('should find `Test Group` group and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.waitUntil(() => MainPage.header.getText() === waitingForApprovalData.header);
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
