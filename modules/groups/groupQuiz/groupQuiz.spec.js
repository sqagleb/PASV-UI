import { expect } from 'chai';
import GroupPage from '../_page/GroupPage';
import { admin } from '../../user/_data/user.data';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import GroupsListPage from '../_page/GroupsListPage';
import MainPage from '../../_page/MainPage';
import Notification from '../../_page/Notification';
import { elementText } from '../_data/groupList.data';
import { newGroup } from '../_data/groupCreate.data';

before(() => {
  GroupPage.createNewGroup(admin);
  LoginPage.login(admin);
});

describe('ADD QUIZ TO A RECENTLY CREATED GROUP', () => {
  it('should open Groups List page and verify header', () => {
    GroupsListPage.open();
    expect(MainPage.header.getText()).eq(elementText.header);
  });

  it('should open Recently created group and verify Group name', () => {
    GroupsListPage.testGroup.click();
    expect(GroupPage.groupTitle.getText().includes(newGroup.name)).true;
  });

  it('should add any Quiz to the group', () => {
    GroupPage.editBtn.click();
    GroupPage.showAllBtn.scrollIntoView();
    MainPage.smartClick(GroupPage.showAllBtn);
    MainPage.smartClick(GroupPage.showAllBtn);
    MainPage.smartClick(GroupPage.addQuizBtn);
    Notification.successMsgDisplayed();
  });

  it('should open the Group and verify quiz is present and remove it', () => {
    GroupsListPage.open();
    GroupsListPage.testGroup.click();
    GroupPage.editBtn.click();
    GroupPage.showAllBtn.scrollIntoView();
    GroupPage.removeQuizBtn.click();
    Notification.successMsgDisplayed();
  });
});

after('should logout', () => {
  LogoutPage.logout();
});
