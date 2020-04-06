import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import MainPage from "../../_page/MainPage";
import FlashCardsPage from '../../_page/FlashCardsPage';
import CardsTrainingPage from '../_page/CardsTrainingPage';
import CardsMainAndCompactViewPage from "../_page/CardsMainAndCompactViewPage";
import LogoutPage from "../../user/_page/LogoutPage";
import { student } from '../../user/_data/user.data';
import {pageTitle, waitingForApprovalData, progressBarAttribute} from "../_data/newCard.data";

let nrOfCards;

describe('CARDS TRAINING', () => {
  before('login as student and open Cards page from Home page', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    MainPage.verifyElementText(MainPage.header, pageTitle);
    //browser.waitUntil(() => MainPage.header.getText() === pageTitle);
  });

  it('should find `Test Group` group and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    MainPage.verifyElementText(MainPage.header,waitingForApprovalData.header);
    //browser.waitUntil(() => CardsTrainingPage.groupTitle.getText() === waitingForApprovalData.header);
  });

  it('should check number of cards in a group from CompactView page', () => {
    FlashCardsPage.compactViewLink.waitForDisplayed();
    FlashCardsPage.compactViewLink.click();
    CardsMainAndCompactViewPage.compactViewFirstElement.waitForDisplayed();
    nrOfCards = CardsTrainingPage.cardsList.length;
  });

  it('should click `Training` link', () => {
    //FlashCardsPage.trainingLink.waitForDisplayed();
    FlashCardsPage.trainingLink.click();
    browser.waitUntil( () => CardsTrainingPage.startTrainingBtn.isDisplayed());
  });

  it('should click `I Know` until StartTraining button is displayed and click on it', () => {
    while (!CardsTrainingPage.startTrainingBtn.isDisplayed()) {
        CardsTrainingPage.iKnowBtn.click();
        browser.waitUntil( () => CardsTrainingPage.iKnowBtn.isDisplayed());
      }
      CardsTrainingPage.startTrainingBtn.click();
  });



  it('should click `Show answer` button and check if answer is displayed', () => {
    CardsTrainingPage.showAnswerBtn.click();
    CardsTrainingPage.answerTxt.waitForDisplayed();
  });

  it('should click `Get Random` button and wait for action buttons is displayed', () => {
    CardsTrainingPage.getRandomBtn.click();
    CardsTrainingPage.iKnowBtn.waitForDisplayed();
  });

  it('should click `I know` until FlashGroup finished and check values in Progress Bar', () => {
    for (let i = 0; i < nrOfCards; i++) {
      const expectedBarValue = Math.floor((100 / nrOfCards) * i).toString();
      browser.waitUntil( () => CardsTrainingPage.progressBar.getAttribute(progressBarAttribute).toString() === expectedBarValue);
      expect(CardsTrainingPage.progressBar.getAttribute(progressBarAttribute)).eq(expectedBarValue);
      CardsTrainingPage.iKnowBtn.click();
    }
  });

  it('should check if `Start training` button is enabled', () => {
    CardsTrainingPage.startTrainingBtn.waitForEnabled();
  });

  after('logout', () => {
    LogoutPage.logout();
  });
});
