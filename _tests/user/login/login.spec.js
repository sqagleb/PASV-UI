import {expect}  from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import {student} from '../../../_data/_user.data';
import Notification from '../../../_pages/Notification';
import MainPage from "../../../_pages/MainPage";
import {H1LoginPage} from "../../../_data/loginPage.data";

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
