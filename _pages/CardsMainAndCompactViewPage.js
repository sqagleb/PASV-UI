import AppPage from './AppPage';

class CardsMainAndCompactViewPage extends AppPage {
  get mainView() {
    return browser.$('[class="nav-link"][qa=main-view]');
  }

  get mainViewActive() {
    return browser.$('[class="nav-link active"][qa=main-view]');
  }

  get compactView() {
    return browser.$('[class="nav-link"][qa="compact-view"]');
  }

  get compactViewActive() {
    return browser.$('[class="nav-link active"][qa="compact-view"]');
  }

  get compactViewFirstElement() {
    return browser.$('[class="pb-1 mb-1 border-bottom"]');
  }

  get questionText() {
    return browser.$(
      '//strong[contains(text(),"What is the difference between the first test and the second one?")]',
    );
  }

  get cardQuestion() {
    return browser.$('//strong[@class="d-block mb-2"][@qa="question"]');
  }

  get answerText() {
    return browser.$('//div[@class="answer mb-4 mt-1 img-shadow"]');
  }

  get cardAnswer() {
    return browser.$('span[qa="answer"]');
  }
}
export default new CardsMainAndCompactViewPage();
