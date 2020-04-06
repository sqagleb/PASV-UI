import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';
import { admin, student } from '../../user/_data/user.data';
import LogoutPage from '../../user/_page/LogoutPage';
import DiaryPage from '../_page/DiaryPage';
import ProfilePage from '../../user/_page/ProfilePage';

let beforeCoinsNumber = 0;
let newCoinsNumber = 0;
let topCoinsNumber = 0;


describe('SAVE COINS NUMBER BEFORE', () => {
  before(() => {
    LoginPage.login(student);
    DiaryPage.open();
    CreateDayReportPage.createNewDayReport();
  });

  it('should save current number of student coins from the Profile page', () => {
    ProfilePage.open();
    browser.refresh();
    beforeCoinsNumber = ProfilePage.coinsTotal.getText();
    topCoinsNumber = ProfilePage.coinsTotalTopRight.getText();
    expect(topCoinsNumber).eq(beforeCoinsNumber);
  });

  after('should logout from student', () => {
    LogoutPage.logout();
  });
});


describe('APPROVE DAY REPORT BY ADMIN', () => {
  before(() => {
    LoginPage.login(admin);
    DiaryPage.open();
  });

  it('should approve day report', () => {
    DiaryPage.approveBtn.click();
  });

  after('should logout from admin', () => {
    LogoutPage.logout();
  });
});


describe('VERIFY TOTAL NUMBER OF COINS AFTER ADMIN REPORT APPROVAL', () => {
  before(() => {
    LoginPage.login(student);
    ProfilePage.open();
  });

  it('should verify that the number of coins have increased by 1 after report approval', () => {
    browser.refresh();
    topCoinsNumber = ProfilePage.coinsTotalTopRight.getText();
    newCoinsNumber = ProfilePage.coinsTotal.getText();
    expect(Number.parseInt(newCoinsNumber)).eq(Number.parseInt(beforeCoinsNumber) + 1);
  });

  it(
    'should verify that the number of coins from the top right corner matches the number ' +
      'of coins under the header on the Profile page',
    () => {
      expect(topCoinsNumber).eq(newCoinsNumber);
    },
  );
});
