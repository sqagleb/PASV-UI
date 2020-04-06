import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';
import DailyReportsPage from '../_page/DailyReportsPageList';
import { student } from '../../user/_data/user.data';

describe('DAILY REPORTS PAGE TESTING', () => {
  before(() => {
    LoginPage.login(student);
    for (let i = 0; i < 3; i++) {
      CreateDayReportPage.createNewDayReport();
    }
  });

  it('should click Diary button and check 3 latest reports', () => {
   DailyReportsPage.diaryBtn.click();
   DailyReportsPage.checkLast3Reports();
  });

  after('should logout', () => {
    LogoutPage.logout();
  });

});
