import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import {
    H1LoginPage,
    studentWithWrongEmail,
    studentWithWrongPassword,
    incorrectEmailsArray,
} from '../../../_data/loginPage.data';
import Notification from '../../../_pages/Notification';
import MainPage from '../../../_pages/MainPage';
import { student } from '../../../_data/_user.data';

describe('LOGIN PAGE --NEGATIVE', () => {
    before(() => {
        LoginPage.open();
        MainPage.verifyElementText(MainPage.header, H1LoginPage);
    });

    it('button `Submit` should be disabled by default', () => {
        expect(LoginPage.submitBtn.isEnabled()).false;
    });

    it('should NOT login user with wrong email and get fail notification', () => {
        LoginPage.login(studentWithWrongEmail);
        Notification.failMsgDisplayed();
    });

    it('should NOT login user with wrong password and get fail notification', () => {
        LoginPage.login(studentWithWrongPassword);
        Notification.failMsgDisplayed();
    });

    it('login Btn should be disabled with empty email', () => {
        LoginPage.emailInput.setValue(studentWithWrongEmail.emptyEmail);
        LoginPage.passwordInput.setValue(student.password);
        expect(LoginPage.submitBtn.isEnabled()).false;
        expect(LoginPage.requiredNotification.isDisplayed()).true;
    });

    it('login Btn should be disabled with empty password', () => {
        LoginPage.emailInput.setValue(student.email);
        LoginPage.passwordInput.setValue(studentWithWrongPassword.emptyPass);
        expect(LoginPage.submitBtn.isEnabled()).false;
        expect(LoginPage.requiredNotification.isDisplayed()).true;
    });

    it('insert incorrect emails, Login Btn should be Disabled', () => {
        for (let i = 0; i < incorrectEmailsArray.length; i++) {
            LoginPage.emailInput.setValue(incorrectEmailsArray[i]);
            LoginPage.passwordInput.setValue(student.password);
            expect(LoginPage.invalidEmailNotification.isDisplayed()).true;
            expect(LoginPage.submitBtn.isEnabled()).false;
        }
    });
});
