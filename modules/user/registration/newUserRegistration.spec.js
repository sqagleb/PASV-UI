import { expect } from "chai";
import Notification from '../../_page/Notification';
import RegistrationPage from '../_page/RegistrationPage';

describe('USER REGISTRATION', () => {
  before('should open Register Page, verify H1 (header)',  () => {
      RegistrationPage.openPageVerifyH1();
    });

  it('button `Submit` should be disabled by default', () => {
    expect(RegistrationPage.submitBtn.isEnabled()).false;
  });

  it('should fill out all fields, click Submit Btn, verify page h1 (header)', () => {
    RegistrationPage.newUserRegisterVerifyH1()
  });

  it('should get successful notification about user registration in the system', () => {
   Notification.successIsDisplayed();
  });
});
