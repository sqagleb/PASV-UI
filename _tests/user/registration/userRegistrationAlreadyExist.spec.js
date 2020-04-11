import RegistrationPage from '../../../_pages/RegistrationPage';
import Notification from '../../../_pages/Notification';
import { H1RegisterPage } from '../../../_data/userRegistration.data';
import MainPage from '../../../_pages/MainPage';

describe('NEW USER REGISTRATION -- DUPLICATE REGISTRATION', () => {
  before('Open register page, register new user, confirm user created', () => {
    RegistrationPage.open();
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
    RegistrationPage.registerNewUser();
    Notification.successMsgDisplayed();
  });

  it(' should open registration page', () => {
    RegistrationPage.open();
  });

  it('should register user with same data', () => {
    RegistrationPage.registerNewUser();
  });

  it('verify fail message', () => {
    Notification.failMsgDisplayed();
  });

  it('should verify user still on register page', () => {
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
  });
});
