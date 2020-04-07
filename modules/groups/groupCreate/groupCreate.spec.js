import { expect } from 'chai';
import Menu from '../../_page/Menu';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import GroupPage from '../_page/GroupPage';
import MainPage from '../../_page/MainPage';
import { admin, student } from '../../user/_data/user.data';
import { newGroup } from '../_data/groupCreate.data';
import { elementText } from '../_data/groupList.data';
import GroupsListPage from '../_page/GroupsListPage';

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
    expect(MainPage.header.getText().includes(newGroup.name)).true;
  });
});

after('it should logout', () => {
  LogoutPage.logout();
});
