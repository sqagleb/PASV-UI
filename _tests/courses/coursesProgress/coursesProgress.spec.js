import Menu from '../../../_pages/Menu';
import LoginPage from '../../../_pages/LoginPage';
import LogoutPage from '../../../_pages/LogoutPage';
import ProfilePage from '../../../_pages/ProfilePage';
import CoursesProgressPage from '../../../_pages/CoursesProgressPage';
import { text } from '../../../_data/profilePage.data';
import { admin, student } from '../../../_data/_user.data';
import CoursesPage from '../../../_pages/CoursesPage';
import { course } from '../../../_data/courseProgress.data';
import { expect } from 'chai';

// this tests will be refactored once Create New Course method is proper
describe('COURSES PROGRESS PAGE', () => {
  before(() => {
    CoursesPage.createNewCourse(admin, course.name);
    LogoutPage.logout();
    LoginPage.login(student);
  });

  it('should click Courses link', () => {
    Menu.coursesLink.click();
  });

  it('should find and open recently created course', () => {
    $(`//a[contains(text(),${course.name})]`).click();
    browser.pause(4000);
  });

  it('should click Progress link', () => {
    Menu.coursesLink.click();
    CoursesProgressPage.progressLink.click();
  });

  it('should check Course Report page is open', () => {
    expect(Menu.h1.getText()).equal('Course Report');
  });

  it('should click Completed Lessons button', () => {
    const element = CoursesProgressPage.completedLessonsBtn;
    element.click();
  });

  it('should click link Profile page', () => {
    ProfilePage.goToProfilePage();
    browser.pause(1000);
  });

  it('should go to `Profile` page', () => {
    expect(Menu.h1.getText()).equal(text.studentName);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
