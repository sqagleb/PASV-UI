import AppPage from './AppPage';

class CardsPage extends AppPage {
  open() {
    super.open('https://stage.pasv.us/flash');
  }

  get groupName() {
    return browser.$('//a[text()="TestGroup"]');
  }

  get createNewCardBtn() {
    return browser.$('//button[text() = "Create new Card"]');
  }

  get modalForm() {
    return browser.$('//div[contains(@class, "sidepanel")]');
  }

  get modalFormTitle() {
    return browser.$(
      '//h5[@class="modal-title"]',
    );
  }

  get question() {
    return browser.$('.modal-body textarea[name="question"]');
  }

  get answer() {
    return browser.$('.modal-body textarea[name="answer"]');
  }

  get createBtn() {
    return browser.$('.modal-body button[type= "submit"]');
  }

  get modalFormCloseOut() {
    return browser.$('.modal-body button.close');
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
    return browser.$('//h4[@qa="name"]//a[text()="TestGroup"]');
  }
}

export default new CardsPage();
