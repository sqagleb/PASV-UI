import AppPage from './AppPage';
import { groupNameLink } from '../cards/_data/newCard.data';

class FlashCardsPage extends AppPage {
  open() {
    super.open('https://stage.pasv.us/flash');
  }

 get pageDescription() {
    return browser.$('//div//p[@qa="flash-description"]');
  }

  get openCardsMenu() {
    return browser.$('//li//a[contains(text(),"Cards")]');
  }

  get groupName() {
    return browser.$('//a[text()="Test Group Feb 16"]');
  }

  get createNewCardBtn() {
    return browser.$('//button[text() = "Create new Card"]');
  }

  get modalForm() {
    return browser.$('//div[contains(@class, "sidepanel")]');
  }

  get modalFormTitle() {
    return browser.$(
      '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
    );
  }

  get question() {
    return browser.$('//textarea[@name = "question"]');
  }

  get answer() {
    return browser.$('//textarea[@name = "answer"]');
  }

  get createBtn() {
    return browser.$('//button[text() = "Create"]');
  }

  get modalFormCloseOut() {
    return browser.$('//button[@class = "close"]');
  }

  get titleOfCurrentGroup() {
    return browser.$('//h1');
  }

  get firstCreatedCard() {
    return browser.$('//div[@qa="flash-group-item"]//a');
  }

  get lastCreatedCard() {
    return browser.$('//div[@class="pb-4 mb-4 border-bottom"]//strong[@class="d-block mb-2"]');
  }

  get lastCreatedCardCreator() {
    return browser.$('//div[@class = "row"]//small[@class]');
  }

  get lastCreatedCardStatus() {
    return browser.$('//div[@class = "row"]//span[contains(@class,"badge")]');
  }

  get profileDropdown() {
    return browser.$('//a[@class = "dropdown-toggle nav-link"]');
  }

  get logoutLink() {
    return browser.$('// button[contains(text(), "Logout")]');
  }

  //testing one of the cards
  get h1LastCreated() {
    return browser.$('//h1');
  }

  get mainViewLink() {
    return browser.$(
        '//ul[@qa="flash-group-tabs"]//a[contains(text(),"Main view")]',
        );
  }

  get compactViewLink() {
    return browser.$(
        '//ul[@qa="flash-group-tabs"]//a[contains(text(),"Compact view")]',
        );
  }

  get waitingForApproval() {
    return browser.$(
        '//ul[@qa="flash-group-tabs"]//a[contains(text(),"Waiting for approval")]',
        );
  }

  get trainingLink() {
    return browser.$(
      '//ul[@qa="flash-group-tabs"]//a[contains(text(),"Training")]',
    );
  }

  get cardLastInList() {
    return browser.$('//div[@qa="flash-group-item"][last()]//a');
  }

  get linkToGroup() {
    // return browser.$('=TestGroup');  - looks cool, but we decided to use other standard in the whole project
    return browser.$('//h4[@qa="name"]//a[text()="TestGroup"]');  //"Test Group Feb 16"]');
  }
}

export default new FlashCardsPage();
