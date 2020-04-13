import { expect } from 'chai';

import GroupPage from '../../../_pages/GroupPage';
import LecturePage from '../../../_pages/LecturePage';
import LoginPage from '../../../_pages/LoginPage';
import LogoutPage from "../../../_pages/LogoutPage";
import { admin, student } from '../../../_data/_user.data';
import { newLecture } from '../../../_data/groupLecture.data';
import GroupsListPage from "../../../_pages/GroupsListPage";

before(() => {
  GroupPage.createNewGroup(admin);
  LecturePage.createLecture(admin);
  LoginPage.login(student);
});

describe('TESTING LECTURE FUNCTIONALITY', () => {
  it('should verify lecture is accessible from Group page', () => {
    GroupsListPage.open();
    GroupsListPage.testGroup.click();
    browser.waitUntil(() => GroupPage.testLecture.isClickable());
    GroupPage.testLecture.click();
  });

  it('should verify the lecture can be marked as understood', () => {
    LecturePage.understoodBtn.click();
    expect(LecturePage.understoodText.getText() === newLecture.markAsUnderstood).true;
  });

  it('should verify the lecture can be liked', () => {
    LecturePage.likeBtn.click();
    browser.waitUntil(() => LecturePage.btnBadge.isDisplayed());
  });

  it('should verify the lecture can be disliked', () => {
    LecturePage.dislikeBtn.click();
    browser.waitUntil(() => LecturePage.btnBadge.isDisplayed());
  });

  it('should verify homework is sent for review', () => {
    LecturePage.homeworkTextBox.click();
    LecturePage.homeworkTextBox.setValue(newLecture.homework);
    LecturePage.sendHomeworkBtn.click();
    browser.waitUntil(() => LecturePage.newHomeworkBadge.isDisplayed());
  });

  it('should verify commenting the lecture', () => {
    LecturePage.commentTextBox.click();
    LecturePage.commentTextBox.setValue(newLecture.comment);
    LecturePage.addCommentBtn.click();
    browser.waitUntil(() => LecturePage.commentConfirmation.isDisplayed());
  });

  it('should verify refresh button is clickable', () => {
    expect(LecturePage.refreshCommentBtn.isClickable()).true;
  });

  it('should verify add comment button is disabled without a comment',() => {
    expect(LecturePage.disabledCommentBtn.isEnabled()).false;
  })
});

after('should logout', ()=>{
  LogoutPage.logout();
});
