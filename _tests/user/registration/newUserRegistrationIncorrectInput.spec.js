import { expect } from 'chai';
import RegistrationPage from '../../../_pages/RegistrationPage';
import {
  H1RegisterPage,
  incorrectNamesArray,
  incorrectCellPhoneArray,
  incorrectEmailsArray,
  incorrectPasswordArray,
} from '../../../_data/userRegistration.data';
import MainPage from '../../../_pages/MainPage';

describe('NEW USER REGISTRATION WITH INVALID DATA', () => {
  before('should open Register Page, verify H1 (header)', () => {
    RegistrationPage.open();
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
  });
  // at this moment registration page has 9 fields, all is Required
  it('all(9) input fields mast be "Required" by default', () => {
    expect(RegistrationPage.requiredFieldsList.length).eq(9);
  });

  it('First Name field should pop up a Msg in case incorrect data', () => {
    for (let i = 0; i < incorrectNamesArray.length; i++) {
      RegistrationPage.firstNameInput.setValue(incorrectNamesArray[i]);
      expect(RegistrationPage.invalidInputMsg.isDisplayed()).true;
    }
    RegistrationPage.firstNameInput.clearValue();
  });

  it('Last Name field should pop up a Msg in case incorrect data', () => {
    for (let i = 0; i < incorrectNamesArray.length; i++) {
      RegistrationPage.lastNameInput.setValue(incorrectNamesArray[i]);
      expect(RegistrationPage.invalidInputMsg.isDisplayed()).true;
    }
    RegistrationPage.lastNameInput.clearValue();
  });

  it('Cell phone number field should pop up a Msg in case incorrect data', () => {
    for (let i = 0; i < incorrectCellPhoneArray.length; i++) {
      RegistrationPage.cellPhoneNumberInput.setValue(incorrectCellPhoneArray[i]);
      expect(RegistrationPage.invalidInputMsg.isDisplayed()).true;
    }
    RegistrationPage.cellPhoneNumberInput.clearValue();
  });

  it('Email field should pop up a Msg in case incorrect data', () => {
    for (let i = 0; i < incorrectEmailsArray.length; i++) {
      RegistrationPage.emailInput.setValue(incorrectEmailsArray[i]);
      expect(RegistrationPage.invalidInputMsg.isDisplayed()).true;
    }
    RegistrationPage.emailInput.clearValue();
  });

  it('Password field should pop up a Msg in case incorrect data', () => {
    for (let i = 0; i < incorrectPasswordArray.length; i++) {
      RegistrationPage.passwordInput.setValue(incorrectPasswordArray[i]);
      expect(RegistrationPage.invalidInputMsg.isDisplayed()).true;
    }
    RegistrationPage.passwordInput.clearValue();
  });

  it('button `Submit` should be disabled by default', () => {
    expect(RegistrationPage.submitBtn.isClickable()).false;
  });
});
