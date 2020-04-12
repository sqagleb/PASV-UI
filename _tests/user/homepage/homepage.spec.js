import { expect } from 'chai';
import HomePage from '../../../_pages/HomePage';
import MainPage from '../../../_pages/MainPage';
import {
  homePageTitle,
  homePageH1,
  loginBtnHref,
  loginBtnText,
  registerBtnText,
  registerHref,
  supportEmail,
} from '../../../_data/homePageData';

describe('HOMEPAGE', () => {
  it('should open the homepage', () => {
    HomePage.open();
  });

  it('should have correct title', () => {
    MainPage.verifyTitle(homePageTitle);
  });

  it('should have correct H1 header', () => {
    expect(MainPage.header.getText()).contains(homePageH1);
  });

  it('verify Login link text', () => {
    MainPage.verifyElementText(HomePage.loginLink, loginBtnText);
  });

  it('verify Login Href', () => {
    expect(HomePage.loginLink.getAttribute('href')).eq(loginBtnHref);
  });

  it('verify Register link text', () => {
    MainPage.verifyElementText(HomePage.registerLink, registerBtnText);
  });

  it('verify Register Href', () => {
    expect(HomePage.registerLink.getAttribute('href')).eq(registerHref);
  });

  it('should verify page have 7 paragraphs', () => {
    expect(HomePage.paragraphBlocksList.length).eq(7);
  });

  it('footer should have support email', () => {
    MainPage.verifyElementText(HomePage.supportEmail, supportEmail);
  });
});
