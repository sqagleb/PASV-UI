import { expect } from 'chai';
import GroupPage from '../../../_pages/GroupPage';
import { admin } from '../../../_data/_user.data';
import LoginPage from '../../../_pages/LoginPage';
import LogoutPage from '../../../_pages/LogoutPage';
import GroupsListPage from '../../../_pages/GroupsListPage';
import MainPage from '../../../_pages/MainPage';
import Notification from '../../../_pages/Notification';
import { elementText } from '../../../_data/groupList.data';
import { newGroup } from '../../../_data/groupCreate.data';

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
    browser.pause(3000);
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

  it('should edit Test Page and verify SaveBtn', () => {
    GroupsListPage.open();
    GroupPage.editBtn.click();
    GroupPage.descriptionTextArea.clearValue();
    GroupPage.descriptionTextArea.setValue('Unstable');
    MainPage.smartClick(GroupPage.saveBtn);
    Notification.successMsgDisplayed();
  });
});

after('should logout', () => {
  LogoutPage.logout();
});
