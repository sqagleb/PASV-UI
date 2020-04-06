import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import {H1LoginPage, studentWithWrongEmail, studentWithWrongPassword} from  '../_data/login.data';
import Notification from '../../_page/Notification';
import MainPage from "../../_page/MainPage";

describe('LOGIN PAGE --NEGATIVE', () => {
    before(() => {
        LoginPage.open();
        MainPage.verifyElementText(MainPage.header, H1LoginPage)
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
});
