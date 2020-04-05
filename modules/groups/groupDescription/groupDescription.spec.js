import { expect } from 'chai';
import Menu from '../../_page/Menu';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import GroupsPage from '../_page/GroupsPage';
import GroupDescriptionPage from '../_page/GroupDescriptionPage';
import { admin, student } from '../../user/_data/user.data';
import { groupDescription } from '../_data/groupDescription.data';
import MainPage from "../../_page/MainPage";

describe('GROUP DESCRIPTION TAB', () => {
  before(() => {
    GroupsPage.createNewGroup(admin);
    LoginPage.login(student);
  });

  it('should click group button', () => {
    Menu.groupLink.click();
    browser.waitUntil(() => Menu.groupLink.isDisplayed());
  });

  it('should have a correct page title', () => {
    const actual = MainPage.header.getText();
    const expected = groupDescription.h1;
    expect(actual).equal(expected);
  });

  it('should open recently created group', () => {
    GroupsPage.testGroup.click();
    browser.waitUntil(() => (GroupDescriptionPage.groupTitle.getText() === groupDescription.name));
  });

  it('should Group have correct name', () => {
    const element = MainPage.header.getText();
    expect(element.includes(groupDescription.name)).true;
  });

  after('it should logout', () => {
    LogoutPage.logout();
  });
});
