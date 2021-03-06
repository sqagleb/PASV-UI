import {expect} from 'chai';
import LoginPage from '../../../_pages/LoginPage';
import LogoutPage from '../../../_pages/LogoutPage';
import ProfilePage from '../../../_pages/ProfilePage';
import MainPage from '../../../_pages/MainPage';
import {elementText, keywords, links, menuLinks} from '../../../_data/profilePage.data';
import {student} from '../../../_data/_user.data';

before(() => {
  LoginPage.login(student);
  MainPage.verifyElementText(MainPage.header, elementText.studentName);
});

describe('VERIFY MENU LINKS', () => {

  it('Should verify that Menu Items are clickable and contain links', () => {
    const arrMenu = ProfilePage.menuItems;
    const arrMenuLinks = menuLinks;
    if (arrMenu.length === 0) {
      throw new Error('No Elements Found');
    }
    for (let i = 0; i < arrMenu.length; i++) {
      let menuItems = arrMenu[i];
      let menuLinks = arrMenuLinks[i];
      expect((menuItems.getAttribute('href')).includes(menuLinks) && menuItems.isClickable()).true;
    }
  });
});

describe('VERIFY `STUDENT PASV` DROPDOWN MENU', () => {

  it('Should verify that dropdown menu is clickable', () => {
    expect(ProfilePage.userDropdown.isClickable()).true;
  });

  it('Should verify that dropdown menu is equal to Student Name', () => {
    expect(ProfilePage.userDropdown.getText()).eq(student.name);
  });

  it('Should verify that `Profile` element of dropdown menu is clickable', () => {
    ProfilePage.userDropdownClick();
    expect(ProfilePage.userDropdownProfile.isClickable()).true;
  });

  it('Should verify `Settings` element of dropdown menu is clickable', () => {
    expect(ProfilePage.userDropdownSettings.isClickable()).true;
  });

  it('Should verify `Logout` button exists in dropdown menu', () => {
    expect(ProfilePage.logoutButton.isExisting()).true;
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
    expect(ProfilePage.checkElemLink(ProfilePage.createDayReportBtn, links.createDiary)).true;
  });
});

describe('SOCIAL NETWORKS INTEGRATION WITH USER PROFILE', () => {
  it('should verify Facebook icon contains correct link and opens new window on click', () => {
    ProfilePage.userDropdownClick();
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
