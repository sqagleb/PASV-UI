import {expect} from "chai";
import LoginPage from '../../../_pages/LoginPage';
import CreateDayReportPage from '../../../_pages/DailyReportCreatePage';
import {student} from '../../../_data/_user.data';
import {hoursStudiedInputsInvalid, howWasYourDayInputsInvalid} from "../../../_data/dailyReportsCreate.data";

before('should login as a STUDENT', () => {
  LoginPage.login(student);
  CreateDayReportPage.open();
});

describe('CREATE DAY REPORT -- with all empty inputs', () => {

  it('should verify that user can not create diary with all empty inputs', () => {
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });
});

describe('CREATE DAY REPORT -- with all empty `MARKS`', () => {
  before('should refresh the page', () => {
    browser.refresh();
  });

  it('should verify that user can not create diary with all empty `MARKS`', () => {
    CreateDayReportPage.markEmptyScenario();
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });

  it('should verify that required `MARKS`warning is displayed', () => {
    expect(CreateDayReportPage.requiredMarks.isDisplayed()).true;
  });
});

describe('CREATE DAY REPORT -- with empty `MORALE` field', () => {
  before('should refresh the page', () => {
    browser.refresh();
  });

  it('should verify that user can not create diary with empty `HOURS` field', () => {
    CreateDayReportPage.moraleEmptyFieldScenario();
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });

  it('should verify that required `MORALE` field warning is displayed', () => {
    expect(CreateDayReportPage.requiredWarning.isDisplayed()).true;
  });
});

describe('CREATE DAY REPORT -- with empty `HOURS` field', () => {
  before('should refresh the page', () => {
    browser.refresh();
  });

  it('should verify that user can not create diary with empty `HOURS` field', () => {
    CreateDayReportPage.hoursEmptyFieldScenario();
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });

  it('should verify that required `HOURS` field warning is displayed', () => {
    expect(CreateDayReportPage.requiredWarning.isDisplayed()).true;
  });
});


describe('CREATE DAY REPORT -- with incorrect HOURS input', () => {
  before('should refresh the page', () => {
    browser.refresh();
  });

  it('should verify that user can not create diary with incorrect HOURS input', () => {
    CreateDayReportPage.hoursEmptyFieldScenario();
    for (let i = 0; i < hoursStudiedInputsInvalid.length; i++) {
      CreateDayReportPage.howManyHours.setValue(hoursStudiedInputsInvalid[i]);
    }
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });

  it('should verify that incorrect HOURS input warning is displayed', () => {
    expect(CreateDayReportPage.hoursIncorrectInputWarning.isDisplayed()).true;
  });
});

describe('CREATE DAY REPORT -- with incorrect `HOW WAS YOUR DAY` input', () => {
  before('should refresh the page', () => {
    browser.refresh();
  });

  it('should verify that user can not create diary with incorrect `HOW WAS YOUR DAY` input', () => {
    CreateDayReportPage.howWasYourDayNegativeScenario();
    for (let i = 0; i < howWasYourDayInputsInvalid.length; i++) {
      CreateDayReportPage.howWasYourDay.setValue(howWasYourDayInputsInvalid[i]);
    }
    expect(CreateDayReportPage.saveBtn.isClickable()).false;
  });

  it('should verify that incorrect `HOW WAS YOUR DAY` input warning is displayed', () => {
    expect(CreateDayReportPage.howWasYourDayIncorrectInputWarning.isDisplayed()).true;
  });
});



