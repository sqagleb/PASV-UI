import LoginPage from '../../../_pages/LoginPage';
import CreateDailyReportsPage from '../../../_pages/DailyReportCreatePage';
import {student} from '../../../_data/_user.data';
import {createDayReport, hoursStudiedInputs, howWasYourDayInputs} from '../../../_data/dailyReportsCreate.data';
import {expect} from "chai";
import MainPage from "../../../_pages/MainPage";

describe('CREATE DAY REPORT', () => {
  before('should login as STUDENT and open page Create day report', () => {
    LoginPage.login(student);
    CreateDailyReportsPage.open();
    MainPage.verifyElementText(MainPage.header, createDayReport.h1)
  });

  it('should verify correct page header', () => {
    expect(MainPage.header.getText()).eq(createDayReport.h1);
  });

  it('should create day report', () => {
    CreateDailyReportsPage.checkMark.click();
    CreateDailyReportsPage.selectDropdown();

    for (let i = 0; i < hoursStudiedInputs.length; i++) {
      CreateDailyReportsPage.howManyHours.setValue(hoursStudiedInputs[i]);
    }
    for (let i = 0; i < howWasYourDayInputs.length; i++) {
      CreateDailyReportsPage.howWasYourDay.setValue(howWasYourDayInputs[i]);
    }
    expect(CreateDailyReportsPage.saveBtn.isClickable()).true;
  });

});

