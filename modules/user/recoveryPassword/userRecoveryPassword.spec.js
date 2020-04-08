// import { expect } from 'chai';
// import LoginPage from '../_page/LoginPage';
// import Notification from '../../_page/Notification';
// import ResetPasswordPage from '../_page/ResetPasswordPage';
// import CheckEmailPage from '../../_page/CheckEmailPage';
// import { testEmails, pagePswRecovery } from '../_data/recoveryPassword.data';
// import MainPage from "../../_page/MainPage";
// import {H1LoginPage} from "../_data/login.data";
//
// describe('USER PASSWORD RECOVERY', () => {
//
//   before('open Login page', () => {
//     LoginPage.open();
//     MainPage.verifyElementText(MainPage.header, H1LoginPage);
//   });
//
//   it('should check if Forgot password link is displayed', () => {
//     expect(LoginPage.forgotPasswordLink.getText()).eq(pagePswRecovery.forgotLinkTxt);
//   });
//
//   it('should click Forgot password link and user redirected to Reset your password page', () => {
//     LoginPage.forgotPasswordLink.click();
//     browser.waitUntil(() => ResetPasswordPage.header.getText() === pagePswRecovery.h1, 500);
//   });
//
//   it('should check if the button `Send password reset email` is displayed', () => {
//     ResetPasswordPage.submitBtn.waitForDisplayed(100);
//   });
//
//   it('should check if `Required` message is displayed for empty Email field', () => {
//     $(ResetPasswordPage.emailInput).clearValue();
//     browser.waitUntil(() => ResetPasswordPage.requiredMsg.isDisplayed(), 100);
//   });
//
//   it('should check if the button is not clickable if email field is empty', () => {
//     expect(ResetPasswordPage.submitBtn.isEnabled()).false;
//   });
//
//   it('should check if `Send password reset email` button is not clickable with incorrect email', () => {
//     ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
//     browser.waitUntil(() => !ResetPasswordPage.submitBtn.isClickable(), 500);
//   });
//
//   it('should check if `Invalid email address` warning is displayed with incorrect email', () => {
//     ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
//     Notification.invalidMsg.waitForDisplayed(500);
//   });
//
//   it('should check if `Send password reset email` button is clickable with correct email', () => {
//     ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
//     browser.waitUntil(() => ResetPasswordPage.submitBtn.isClickable(), 1000);
//   });
//
//   it('should check failed message `User not found` appears if entered email is not found in the database', () => {
//     ResetPasswordPage.emailInput.setValue(testEmails.notRegistered);
//     ResetPasswordPage.submitBtn.click();
//     MainPage.verifyElementText(Notification.title, pagePswRecovery.failedMsgTxt);
//   });
//
//   it('should check that user is left on the same page if email is not in the database', () => {
//     expect(ResetPasswordPage.header.getText()).eq(pagePswRecovery.h1);
//   });
//
//   it('should success message be displayed', () => {
//     CheckEmailPage.successMsg.waitForDisplayed(1000);
//   });

// });
