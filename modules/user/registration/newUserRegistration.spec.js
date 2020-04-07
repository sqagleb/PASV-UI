import { expect } from 'chai';
import Notification from '../../_page/Notification';
import RegistrationPage from '../_page/RegistrationPage';
import { H1RegisterPage } from '../_data/userRegistration.data';
import MainPage from '../../_page/MainPage';
import { H1LoginPage } from '../_data/login.data';

describe('NEW USER REGISTRATION', () => {
  before('should open Register Page, verify H1 (header)', () => {
    RegistrationPage.open();
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
  });

  it('button `Submit` should be disabled by default', () => {
    expect(RegistrationPage.submitBtn.isEnabled()).false;
  });

  it('should fill out all fields, click Submit Btn', () => {
    RegistrationPage.registerNewUser();
  });

  it('verify page h1 (header)', () => {
    MainPage.verifyElementText(MainPage.header, H1LoginPage);
  });

  it('should get successful notification about user registration in the system', () => {
    Notification.successMsgDisplayed();
  });
});
