import LoginPage from '../../user/_page/LoginPage';
import CreateDayReportPage from '../_page/CreateDayReportPage';
import {student} from '../../user/_data/user.data';
import {createDayReport, hoursStudiedInputs, howWasYourDayInputs} from '../_data/createDayReport.data';
import {expect} from "chai";
import MainPage from "../../_page/MainPage";
import {dailyReportList} from "../_data/dailyReportsList.data";

describe('CREATE DAY REPORT', () => {
  before('should login as STUDENT and open page Create day report', () => {
    LoginPage.login(student);
    CreateDayReportPage.open();
    MainPage.verifyElementText(MainPage.header, createDayReport.h1)
  });

  it('should verify correct page header', () => {
    expect(MainPage.header.getText()).eq(createDayReport.h1);
  });

  it('should create day report', () => {
    CreateDayReportPage.checkMark.click();
    CreateDayReportPage.selectDropdown();

    for (let i = 0; i < hoursStudiedInputs.length; i++) {
      CreateDayReportPage.howManyHours.setValue(hoursStudiedInputs[i]);
    }
    for (let i = 0; i < howWasYourDayInputs.length; i++) {
      CreateDayReportPage.howWasYourDay.setValue(howWasYourDayInputs[i]);
    }
    CreateDayReportPage.saveBtn.click();
    MainPage.verifyElementText(MainPage.header, dailyReportList.h1);
    expect(MainPage.header.getText()).eq(dailyReportList.h1);
  });

  it('should check if the daily report was created', () => {
    expect(CreateDayReportPage.newDayReport.getText()).eq(howWasYourDayInputs[5]);
  });
});

