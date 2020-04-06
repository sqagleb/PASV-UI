import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import MainPage from "../../_page/MainPage";
import FlashCardsPage from '../../_page/FlashCardsPage';
import LogoutPage from "../../user/_page/LogoutPage";
import { student } from '../../user/_data/user.data';
import { pageTitle, waitingForApprovalData, flashGroupContent} from '../_data/newCard.data';

describe('MENU CARDS PAGE', () => {
  before('login as a student and open `FlashCards` page', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    MainPage.verifyElementText(MainPage.header, pageTitle);
    //browser.waitUntil(() => MainPage.header.getText() === pageTitle);
  });

  it('should check title of the oldest created card', () => {
    expect(FlashCardsPage.cardLastInList.getText()).eq(waitingForApprovalData.header);
  });

  it('should check `Main view` title in the navigation menu link', () => {
    FlashCardsPage.firstCreatedCard.click();
    MainPage.verifyElementText(MainPage.header, flashGroupContent.mainView);
    //browser.waitUntil(()=>FlashCardsPage.mainViewLink.getText() === flashGroupContent.mainView);
  });

  it('should check `Compact view` title in the navigation menu', () => {
    expect(FlashCardsPage.compactViewLink.getText()).eq(flashGroupContent.compactView);
  });

  it('should check `Waiting for approval` title in the navigation menu', () => {
    expect(FlashCardsPage.waitingForApproval.getText()).eq(flashGroupContent.waitingForApproval);
  });

  it('should check `Training` title of Navigation Menu link', () => {
    expect(FlashCardsPage.trainingLink.getText()).eq(flashGroupContent.training);
  });

  it('should check `Main view` link is clickable', () => {
    expect(FlashCardsPage.mainViewLink.isClickable()).be.true;
  });

  it('should check `Compact view` link is clickable', () => {
    expect(FlashCardsPage.compactViewLink.isClickable()).be.true;
  });

  it('should check `Waiting for approval` link is clickable', () => {
    expect(FlashCardsPage.waitingForApproval.isClickable()).be.true;
  });

  it('should check `Training` link is clickable', () => {
    expect(FlashCardsPage.trainingLink.isClickable()).be.true;
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});
