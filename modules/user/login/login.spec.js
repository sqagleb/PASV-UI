import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import {student} from  '../_data/user.data';
import Notification from '../../_page/Notification';
import MainPage from "../../_page/MainPage";
import {H1LoginPage} from "../_data/login.data";

describe('LOGIN PAGE --POSITIVE', () => {
    before(() => {
        LoginPage.open();
        MainPage.verifyElementText(MainPage.header, H1LoginPage)
    });

    it('button `Submit` should be disabled by default', () => {
        expect(LoginPage.submitBtn.isEnabled()).false;
    });

    it('should login user us student and get successful notification', () => {
        LoginPage.login(student);
        Notification.successMsgDisplayed();
    });
});
