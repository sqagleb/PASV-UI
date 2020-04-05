import AppPage from '../../_page/AppPage';
import {hoursStudiedInputs, howWasYourDayInputs} from "../_data/createDayReport.data";

class CreateDayReportPage extends AppPage {

  open() {
    super.open('https://stage.pasv.us/diary/create');
  }

  get header() {
    return browser.$('h1');
  }

  get checkMarksTitle() {
    return browser.$('[class="mb-2"]');
  }

  get moraleLevel() {
    return browser.$('[name="morale"]');
  }

  get howManyHours() {
    return browser.$('[name="hours"]');
  }

  get howWasYourDay() {
    return browser.$('[name="description"]');
  }

  get saveBtn() {
    return browser.$('button[type="submit"]');
  }

  get createDayReportBtn() {
    return browser.$('[qa="create-day-report-button"]');
  }

  get newDayReport() {
    return browser.$('//*[@qa="day-report-item-0"]//*[@qa="description"]');
  }


  // get instructionToNeedHelp1() {
  //   return browser.$('//*[@for="input-0"]//*[@class="text-secondary"]');
  // }
  //
  // get instructionToUnderstoodEverything() {
  //   return browser.$(
  //     '//*[@for="input-1"]//*[@class="text-secondary"]',
  //   );
  // }
  //
  // get instructionToHelpedClassmates() {
  //   return browser.$('//*[@for="input-2"]//*[@class="text-secondary"]');
  // }
  //
  // get slogan() {
  //   return browser.$('[qa="app-slogan"]');
  // }

  get hoursIncorrectInputWarning() {
    return browser.$('[class = "invalid-feedback"]');
  }

  get howWasYourDayIncorrectInputWarning() {
    return browser.$('[class="invalid-feedback"]');
  }

  get requiredWarning() {
    return browser.$('//*[@class = "invalid-feedback w-auto ml-2"]');
  }
  get requiredMarks() {
    return browser.$('//*[@class = "invalid-feedback d-inline"]');
  }

  get checkMark() {
    return browser.$('#input-4');
  }
  get moraleList (){
    return browser.$$('//*[@name="morale"]//*[@value]')
  }

  selectDropdown() {
    this.moraleLevel.selectByVisibleText('10 – I am pleased with everything!');
    for (let i = 9; i > 0; i--) {
      this.moraleLevel.selectByVisibleText(`${i}`);
    }
    this.moraleLevel.selectByVisibleText('0 – I give up');
  }

  hoursEmptyFieldScenario() {
    this.checkMark.click();
    this.moraleLevel.selectByVisibleText('9');
    this.howWasYourDay.setValue(howWasYourDayInputs[5]);
  }

  markEmptyScenario() {
    this.moraleLevel.selectByVisibleText('5');
    this.howManyHours.setValue(hoursStudiedInputs[3]);
    this.howWasYourDay.setValue(howWasYourDayInputs[5]);
  }

  moraleEmptyFieldScenario() {
    this.checkMark.click();
    this.howManyHours.setValue(hoursStudiedInputs[3]);
    this.howWasYourDay.setValue(howWasYourDayInputs[5]);
  }

  howWasYourDayNegativeScenario() {
    this.checkMark.click();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue(hoursStudiedInputs[4]);
  }

  createNewDayReport() {
    this.createDayReportBtn.click();
    this.checkMark.click();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue(hoursStudiedInputs[4]);
    this.howWasYourDay.setValue(howWasYourDayInputs[4]);
    this.saveBtn.click();
  }
}

export default new CreateDayReportPage();
