import {expect} from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import DailyReportCreatePage from '../../../_pages/DailyReportCreatePage';
import {admin, student} from '../../../_data/_user.data';
import LogoutPage from '../../../_pages/LogoutPage';
import ProfilePage from '../../../_pages/ProfilePage';
import DailyReportsPage from '../../../_pages/DailyReportsPage';

let beforeCoinsNumber = 0;
let newCoinsNumber = 0;
let topCoinsNumber = 0;


describe('SAVE COINS NUMBER BEFORE', () => {
  before(() => {
    LoginPage.login(student);
    DailyReportsPage.open();
    DailyReportCreatePage.createNewDayReport();

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
    DailyReportsPage.open();
  });

  it('should approve day report', () => {
    DailyReportsPage.approveBtn.click();
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
