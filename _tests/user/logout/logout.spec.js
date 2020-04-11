import LoginPage from '../../../_pages/LoginPage';
import { student } from '../../../_data/_user.data';
import Logout from '../../../_pages/LogoutPage';

describe('LOGOUT', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should logout', () => {
    Logout.logout();
  });
});
