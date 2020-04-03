import { expect } from 'chai';

import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import Menu from '../../_page/Menu';
import ProfilePage from '../_page/ProfilePage';
import Notification from '../../_page/Notification';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';

import { text, partialUrl } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

before(() => {
  LoginPage.login(student);
  CreateDayReportPage.createNewDayReport();
});

describe('CREATE DAY REPORT FROM PROFILE PAGE FUNCTIONALITY', () => {
  it('should check Create day report button exists and clickable', () => {
    ProfilePage.goToProfilePage();
    browser.waitUntil(() => ProfilePage.createDayReportBtn.isDisplayed());
    expect(ProfilePage.createDayReportBtn.isClickable()).true;
  });

  it('should user be redirected to Create Day Report page', () => {
    ProfilePage.createDayReportBtn.click();
    browser.waitUntil(() => Menu.h1.isDisplayed());
    expect(Menu.h1.getText()).equal(text.createDayReportH1);
  });
});

describe('DAY REPORT MARK AS LIKED FUNCTIONALITY', () => {
  it('should check profile page is loaded and correct', () => {
    ProfilePage.goToProfilePage();
    browser.waitUntil(() => Menu.h1.isDisplayed());
    expect(Menu.h1.getText()).equal(text.studentName);
  });

  it('should click Like button', () => {
    ProfilePage.likeBtn.click();
    Notification.success.waitForDisplayed(1500, 'Notification wasn\'t displayed');
  });
});

describe('SOCIAL NETWORKS INTEGRATION WITH USER PROFILE', () => {
  it('should verify that page is correct', () => {
    ProfilePage.goToProfilePage();
    browser.waitUntil(() => Menu.h1.getText() === text.studentName);
  });

  it('should verify Codewars integration', () => {
    ProfilePage.codeWarsIcon.click();
    browser.switchWindow(partialUrl.codewars);
    expect(browser.getUrl()).includes(partialUrl.codewars);
    browser.closeWindow();
    browser.switchWindow(partialUrl.pasv);
  });

  it('should verify Facebook integration', () => {
    ProfilePage.facebookIcon.click();
    browser.switchWindow(partialUrl.facebook);
    expect(browser.getUrl()).includes(partialUrl.facebook);
    browser.closeWindow();
    browser.switchWindow(partialUrl.pasv);
  });

  it('should verify LinkedIn integration', () => {
    ProfilePage.linkedInIcon.click();
    browser.switchWindow(partialUrl.linkedin);
    expect(browser.getUrl()).includes(partialUrl.linkedin);
    browser.closeWindow();
    browser.switchWindow(partialUrl.pasv);
  });
});

after('should logout', () => {
  LogoutPage.logout();
});
