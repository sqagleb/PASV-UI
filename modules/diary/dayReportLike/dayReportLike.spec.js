import { expect } from 'chai';
import CreateDayReportPage from "../_page/CreateDailyReportsPage";
import { student } from '../../user/_data/user.data';
import {dailyReportList} from "../_data/dailyReports.data";
import LoginPage from "../../user/_page/LoginPage";
import {like} from "../_data/dailyReports.data";
import DiaryPage from "../_page/DailyReportsPage";
import MainPage from "../../_page/MainPage";
import DailyReportsPage from '../_page/DailyReportsPage';


describe('DAY REPORT PAGE LIKE BUTTON TESTING', () => {
  before(() => {
    LoginPage.login(student);
    DiaryPage.open();
  });

  it('should have a correct page header', () => {
    expect(MainPage.header.getText()).eq(dailyReportList.h1);
  });


  it('should Like button be clickable', () => {
    CreateDayReportPage.createNewDayReport();
    DailyReportsPage.likeBtn.click();
    browser.waitUntil(() => DailyReportsPage.likeBtn.getText() === like.like1 );
    expect(DailyReportsPage.likeBtn.getText()).eq(like.like1);
  });

  it('should Like button be disabled', () => {
    expect(DailyReportsPage.likeBtn.isEnabled()).false;
  });

});