import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import Menu from '../../../_pages/Menu';
import MainPage from "../../../_pages/MainPage";
import CardsPage from '../../../_pages/CardsPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { student } from '../../../_data/_user.data';
import {pageTitle, waitingForApprovalData, flashGroupContent, positive} from '../../../_data/newCard.data';

describe('MENU CARDS PAGE', () => {
  before('login as a student and open `FlashCards` page', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    MainPage.verifyElementText(MainPage.header, pageTitle);
  });

  it('should check title of the oldest created card', () => {
    expect(CardsPage.cardLastInList.getText()).eq(positive.groupName);
  });

  it('should check `Main view` title in the navigation menu link', () => {
    CardsPage.firstCreatedCard.click();
    MainPage.verifyElementText(CardsPage.mainViewLink, flashGroupContent.mainView);
  });

  it('should check `Compact view` title in the navigation menu', () => {
    expect(CardsPage.compactViewLink.getText()).eq(flashGroupContent.compactView);
  });

  it('should check `Waiting for approval` title in the navigation menu', () => {
    expect(CardsPage.waitingForApproval.getText()).eq(flashGroupContent.waitingForApproval);
  });

  it('should check `Training` title of Navigation Menu link', () => {
    expect(CardsPage.trainingLink.getText()).eq(flashGroupContent.training);
  });

  it('should check `Main view` link is clickable', () => {
    expect(CardsPage.mainViewLink.isClickable()).be.true;
  });

  it('should check `Compact view` link is clickable', () => {
    expect(CardsPage.compactViewLink.isClickable()).be.true;
  });

  it('should check `Waiting for approval` link is clickable', () => {
    expect(CardsPage.waitingForApproval.isClickable()).be.true;
  });

  it('should check `Training` link is clickable', () => {
    expect(CardsPage.trainingLink.isClickable()).be.true;
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});
