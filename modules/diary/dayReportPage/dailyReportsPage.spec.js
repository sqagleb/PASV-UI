import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../_page/CreateDailyReportsPage';
import DailyReportsPage from '../_page/DailyReportsPage'
import {student} from '../../user/_data/user.data';
import {howWasYourDayInputs} from "../_data/createDailyReports.data";
import {expect} from 'chai';
import {dailyReportHeader, like} from '../_data/dailyReports.data';
import MainPage from '../../_page/MainPage';

describe('Daily reports page', () => {
  before(() => {
    LoginPage.login(student);
    DailyReportsPage.open();
    MainPage.verifyElementText(MainPage.header, dailyReportHeader.h1);
  });

  it('should verify correct page header', () => {
    expect(MainPage.header.getText()).eq(dailyReportHeader.h1);
  });

  it('should create day report', () => {
    CreateDayReportPage.createNewDayReport();
  });

  it('should check if report was created', () => {
    expect(DailyReportsPage.newDayReport.getText()).eq(howWasYourDayInputs[5]);
  });

  it('should check the initial number of likes', () => {
    expect(DailyReportsPage.likeBtn.getText()).eq(like.likeBefore);
  });

  it('should click the `like` button and check that the number of likes is not equal initial', () => {
    DailyReportsPage.likeBtn.click();
    browser.waitUntil(() => DailyReportsPage.likeBtn.getText() === like.likeAfter);
    expect(like.likeBefore).not.eq(like.likeAfter);
  });

  it('should check if user can not click `like` button twice', () => {
    expect(DailyReportsPage.likeBtn.isEnabled()).false;
  });

  after('should logout', () => {
    LogoutPage.logout();
  });

});
