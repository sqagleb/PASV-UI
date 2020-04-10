import { expect } from 'chai';

import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import ProfilePage from '../_page/ProfilePage';
import MainPage from '../../_page/MainPage';

import { links, elementText, keywords } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

before(() => {
  LoginPage.login(student);
  MainPage.verifyElementText(MainPage.header, elementText.studentName);
});

describe('VERIFY MENU LINKS', () => {

  it('Should verify that Menu links are clickable', () => {

    const menu = $$('[id=\'site-menu\'] a');
    if(menu.length === 0){
      throw new Error('No Elements Found');
    }
    menu.forEach(el => {
      return expect(el.isClickable()).to.be.true;
    })
  });
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
  it('should check Create Day Report button exists and clickable', () => {
    browser.waitUntil(() => ProfilePage.createDayReportBtn.isDisplayed());
    expect(ProfilePage.createDayReportBtn.isClickable()).true;
  });

  it('should check Create Day Report button contains correct link', () => {
    expect(ProfilePage.checkElemLink(ProfilePage.createDayReportBtn, links.createDiary))
  });
});

describe('SOCIAL NETWORKS INTEGRATION WITH USER PROFILE', () => {
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
