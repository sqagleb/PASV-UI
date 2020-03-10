import { expect } from 'chai';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { positive, pageTitle } from '../../_data/newCard.data';
import { student } from '../../user/_data/user.data';
import axios from 'axios';

describe('CREATE NEW CARD -- POSITIVE', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
  });

  it('should open `FlashCards` page', () => {
    FlashCardsPage.open();
  });

  it('should check if an opened page is the `FlashCards` group page', () => {
    const actual = FlashCardsPage.h1.getText();
    expect(actual).equal(pageTitle);
  });

  it('should check if the exact `FlashCards` group exists', () => {
    const actual = FlashCardsPage.groupName;
    expect(actual).to.exist;
  });

  it('should open the exact `FlashCards` group', () => {
    FlashCardsPage.groupName.click();
  });

  it('should check if the correct `FlashCards` group is opened', () => {
    const actual = FlashCardsPage.titleOfCurrentGroup.getText();
    const expected = positive.groupName;
    expect(actual).equal(expected);
  });

  it('should click `Waiting for approval` link', () => {
    FlashCardsPage.waitingForApproval.click();
  });

  it('should click `Create new Card` button', () => {
    FlashCardsPage.createNewCardBtn.click();
    browser.pause(1000);
  });

  it('should check if a modal form is open', () => {
    const element = FlashCardsPage.modalForm;
    expect(element.isDisplayed()).true;
  });

  it('should check if a correct modal form is open', () => {
    const actual = FlashCardsPage.modalFormTitle.getText();
    const expected = 'Create Flash Card';
    expect(actual).equal(expected);
  });

  it('should fill in the `Question` text area', () => {
    FlashCardsPage.question.setValue(positive.questionText);
  });

  it('should fill in the `Answer` text area', () => {
    FlashCardsPage.answer.setValue(positive.answerText);
    browser.pause(1000);
  });

  it('should check if `Create` button is enabled', () => {
    const el = FlashCardsPage.createBtn.isEnabled();
    expect(el).be.true;
  });

  it('should click `Create` button', () => {
    FlashCardsPage.createBtn.click();
    browser.pause(1000);
  });

  it('should check if a new card was created', () => {
    const actual = FlashCardsPage.lastCreatedCard.getText();
    const expected = positive.questionText;
    expect(actual).equal(expected);
  });

  it('should check if a new card was created in the correct group', () => {
    const actual = FlashCardsPage.titleOfCurrentGroup.getText();
    const expected = positive.groupName;
    expect(actual).equal(expected);
  });

  after('logout', () => {
    FlashCardsPage.logout();
  });

  let flashCardId;

  it('should create new card and store its id', async() => {
    const response = await axios({
      method: 'post',
      url: 'https://server-stage.pasv.us/flash/card',
      headers: {
        Authorization: process.env.ADMIN_TOKEN,
      },
      data: {
        'flashGroupId': '5e669eff70a41a003c435c33',
        'question': positive.questionText,
        'answer': positive.answerText,
      },
    })
      .then(res => res)
      .catch(err => err);
    flashCardId = response.data.payload.flashCardId;
    expect(response.status).eq(200);
    expect(response.data.success).true;

  });

  it('should verify from database by id that card is created', async() => {
    const response = await axios({
      method: 'get',
      url: `https://server-stage.pasv.us/flash/card/${flashCardId}`,
      headers: {
        Authorization: process.env.ADMIN_TOKEN,
      },
    })
      .then(res => res)
      .catch(err => err);
    expect(response.status).eq(200);
    expect(response.data.question).eq(positive.questionText);
    expect(response.data.answer).eq(positive.answerText);
  });
});
