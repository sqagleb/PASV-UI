import GroupPage from '../_page/GroupPage';
import LecturePage from '../_page/LecturePage';
import GroupsListPage from '../_page/GroupsListPage';
import { newLecture } from '../_data/groupLecture.data';
import { admin, student } from '../../user/_data/user.data';
import LoginPage from '../../user/_page/LoginPage';

describe('TESTING NEW LECTURE', () => {
  before(() => {
    GroupPage.createNewGroup(admin);
    LecturePage.createLecture(admin);
    browser.waitUntil(() => LecturePage.lectureLink.getText() === newLecture.name);
    LoginPage.login(student);
  });

  it('should verify lecture is accessible from Group page', () => {
    GroupsListPage.open();
    GroupsListPage.testGroup.click();
  });
});
