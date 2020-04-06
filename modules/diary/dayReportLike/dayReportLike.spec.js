import { expect } from 'chai';
import DayReportLikePage from '../_page/DayReportLikePage';
import CreateDayReportPage from "../../diary/_page/CreateDayReportPage";
import { student } from '../../user/_data/user.data';
import {dailyReportList} from "../_data/dailyReportsList.data";
import LoginPage from "../../user/_page/LoginPage";
import {like} from "../_data/dayReportLike.data";
import DiaryPage from "../_page/DiaryPage";
import MainPage from "../../_page/MainPage";


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
    DayReportLikePage.likeBtn.click();
    browser.waitUntil(() => DayReportLikePage.likeBtn.getText() === like.like1 );
    expect(DayReportLikePage.likeBtn.getText()).eq(like.like1);
  });

  it('should Like button be disabled', () => {
    expect(DayReportLikePage.likeBtn.isEnabled()).false;
  });

});