import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import {student} from  '../_data/user.data';
import Notification from '../../_page/Notification';
import MainPage from "../../_page/MainPage";
import {H1LoginPage} from "../_data/userRegistration.data";

describe('LOGIN PAGE --POSITIVE', () => {
    before(() => {
        LoginPage.open();
        MainPage.verifyElementText(MainPage.header, H1LoginPage)
    });

    it('button `Submit` should be disabled by default', () => {
        expect(LoginPage.submitBtn.isEnabled()).false;
    });

    it('should NOT login user with wrong email and get fail notification', () => {
        LoginPage.login({...student, email: 'wrong@gmail.com'});
        Notification.failMsgDisplayed();
    });

    it('should NOT login user with wrong password and get fail notification', () => {
        LoginPage.login({...student, password: 'wrong'});
        Notification.failMsgDisplayed();
    });
});
