import { expect } from 'chai';

import GroupPage from '../../../_pages/GroupPage';
import LecturePage from '../../../_pages/LecturePage';
import GroupsListPage from '../../../_pages/GroupsListPage';
import { admin, student } from '../../../_data/_user.data';
import LoginPage from '../../../_pages/LoginPage';
import { newLecture } from '../../../_data/groupLecture.data';


describe('TESTING NEW LECTURE', () => {
  before(() => {
    GroupPage.createNewGroup(admin);
    LecturePage.createLecture(admin);
    LoginPage.login(student);
  });

  it('should verify lecture is accessible from Group page', () => {
    GroupsListPage.open();
    GroupsListPage.testGroup.click();
    browser.waitUntil(() => GroupsListPage.testLecture.isClickable());
    GroupsListPage.testLecture.click();
  });

  it('should verify the lecture can be marked as understood', () => {
    GroupsListPage.understoodBtn.click();
    expect(GroupsListPage.understoodText.getText() === newLecture.markAsUnderstood).true;
  });

  it('should verify the lecture can be liked', () => {
    GroupsListPage.likeBtn.click();
    browser.waitUntil(() => GroupsListPage.btnBadge.isDisplayed());
  });

  it('should verify the lecture can be disliked', () => {
    GroupsListPage.dislikeBtn.click();
    browser.waitUntil(() => GroupsListPage.btnBadge.isDisplayed());
  });

  it('should verify homework is sent for review', () => {
    GroupsListPage.homeworkTextBox.click();
    GroupsListPage.homeworkTextBox.setValue(newLecture.homework);
    GroupsListPage.sendHomeworkBtn.click();
    browser.waitUntil(() => GroupsListPage.newHomeworkBadge.isDisplayed());
  });

  it('should verify commenting the lecture', () => {
    GroupsListPage.commentTextBox.click();
    GroupsListPage.commentTextBox.setValue(newLecture.comment);
    GroupsListPage.addCommentBtn.click();
    browser.waitUntil(() => GroupsListPage.commentConfirmation.isDisplayed());
  });

  it('should verify refresh button is clickable', () => {
    expect(GroupsListPage.refreshCommentBtn.isClickable()).true;
  });

  it('should verify add comment button is disabled without a comment',() => {
    expect(GroupsListPage.disabledCommentBtn.isEnabled()).false;
  })
});
