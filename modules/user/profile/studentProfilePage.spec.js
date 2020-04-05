import { expect } from 'chai';

import LoginPage from '../_page/LoginPage';
import LogoutPage from "../_page/LogoutPage";
import ProfilePage from '../_page/ProfilePage';
import MainPage from '../../_page/MainPage';

import { elementText, keywords } from '../_data/profilePage.data';
import { student } from '../_data/user.data';


before(() => {
  LoginPage.login(student);
  browser.waitUntil(() => MainPage.header.getText() === elementText.studentName);
});

describe('CHECK MAIN ELEMENTS ARE PRESENT ON PAGE', () => {
  it('should verify student chart pulse is displayed', () => {
    expect(ProfilePage.studentChart.isDisplayed()).true;
  });

  it('should verify social links panel is displayed', () => {
    expect(ProfilePage.socialLinks.isDisplayed()).true;
  });

  it('should verify Diary list is displayed', () => {
    expect(ProfilePage.diaryList.isDisplayed()).true;
  });
});

describe('CREATE DAY REPORT FROM PROFILE PAGE FUNCTIONALITY', () => {
  it('should check Create day report button exists and clickable', () => {
    browser.waitUntil(() => ProfilePage.createDayReportBtn.isDisplayed());
    expect(ProfilePage.createDayReportBtn.isClickable()).true;
  });

  it('should check user was redirected to Create Day Report page', () => {
    ProfilePage.createDayReportBtn.click();
    browser.waitUntil(() => MainPage.header.getText() === elementText.createDayReportH1);
  });
});

describe('SOCIAL NETWORKS INTEGRATION WITH USER PROFILE', () => {
  it('should verify that page is correct', () => {
    ProfilePage.open();
    browser.waitUntil(() => MainPage.header.getText() === elementText.studentName);
  });

  it('should verify Facebook icon contains correct link and opens new window on click', () => {
    expect(ProfilePage.checkElemLink(ProfilePage.facebookIcon, keywords.facebook)).true;
  });

  it('should verify Codewars icon contains correct link and opens new window on click', () => {
    expect(ProfilePage.checkElemLink(ProfilePage.codewarsIcon, keywords.codewars)).true;
  });

  it('should verify LinkedIn icon contains correct link and opens new window on click', () => {
    expect(ProfilePage.checkElemLink(ProfilePage.linkedinIcon, keywords.linkedin)).true;
  });

  it('should verify Github icon contains correct link and opens new window on click', () => {
    expect(ProfilePage.checkElemLink(ProfilePage.githubIcon, keywords.github)).true;
  });
});

after('should logout', () => {
  LogoutPage.logout();
});
