import { expect } from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import LogoutPage from '../../../_pages/LogoutPage';
import GroupPage from '../../../_pages/GroupPage';
import MainPage from '../../../_pages/MainPage';
import { admin, student } from '../../../_data/_user.data';
import { newGroup } from '../../../_data/groupCreate.data';
import { elementText } from '../../../_data/groupList.data';
import GroupsListPage from '../../../_pages/GroupsListPage';

before('should successfully create new group', () => {
  GroupPage.createNewGroup(admin);
  LoginPage.login(student);
});

describe('TEST NEW GROUP CREATE AS ADMIN', () => {
  it('should open Groups list and verify page is correct', () => {
    GroupsListPage.open();
    browser.waitUntil(() => MainPage.header.getText() === elementText.header);
  });

  it('should open recently created group and check title', () => {
    GroupsListPage.testGroup.click();
    expect(GroupPage.groupTitle.getText().includes(newGroup.name)).true;
  });
});

after('it should logout', () => {
  LogoutPage.logout();
});
