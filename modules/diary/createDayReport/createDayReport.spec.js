import LoginPage from '../../user/_page/LoginPage';
import CreateDayReportPage from '../_page/CreateDayReportPage';
import {student} from '../../user/_data/user.data';
import {createDayReport, hoursStudiedInputs, howWasYourDayInputs} from '../_data/createDayReport.data';
import {expect} from "chai";

describe('CREATE DAY REPORT', () => {
  before('should login as STUDENT and open page Create day report', () => {
    LoginPage.login(student);
    CreateDayReportPage.open();
    browser.waitUntil(() => CreateDayReportPage.header.getText() === createDayReport.h1);
  });

  it('should verify correct page header', () => {
    expect(CreateDayReportPage.header.getText()).eq(createDayReport.h1);
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
    browser.waitUntil(() => CreateDayReportPage.header.getText() === createDayReport.h1);
    expect(CreateDayReportPage.header.getText()).eq(createDayReport.h1);
  });

  it('should check if the daily report was created', () => {
    expect(CreateDayReportPage.newDayReport.getText()).eq(howWasYourDayInputs[5]);
    console.log(CreateDayReportPage.newDayReport.getText());
  });
});

