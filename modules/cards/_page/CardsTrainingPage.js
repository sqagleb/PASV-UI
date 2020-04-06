import AppPage from '../../_page/AppPage';

class CardsTrainingPage extends AppPage {
  get groupTitle() {
    return browser.$('h1');
  }

  get startTrainingBtn() {
    return browser.$('button[class="btn btn-secondary btn-sm"]');
  }

  get showAnswerBtn() {
    return browser.$('button[qa="answer-button"]');
  }

  get iKnowBtn() {
    return browser.$('button[qa="know-button"]');
  }

  get getRandomBtn() {
    return browser.$('button[qa="random-button"]');
  }

  get answerTxt() {
    return browser.$('//div[@class="result"]//p');
  }

  get progressBar() {
    return browser.$('//div[@class="progress"]//div[@aria-valuenow]');
  }

  get cardsList() {
    return browser.$$('//div[@class="pb-1 mb-1 border-bottom"]');
  }
 }
export default new CardsTrainingPage();
