import LoginPage from '../../../_pages/LoginPage';
import Logout from '../../../_pages/LogoutPage';
import NewCourseCreatePage from '../../../_pages/NewCourseCreatePage';
import CourseStartPage from '../../../_pages/CourseStartPage';
import { newCourseCreate } from '../../../_data/courseStart.data';
import { admin, student } from '../../../_data/_user.data';
import { expect } from 'chai';

describe('LOGIN AS ADMIN TO CREATE A COURSE', () => {
  before(() => {
    LoginPage.login(admin);
  });

  it('should create a new course', () => {
    NewCourseCreatePage.newCourseCreate();
  });

  it('should check that created course exists on the courses page', () => {
    const actual = NewCourseCreatePage.createdCourseTitle.getText();
    const expected = newCourseCreate.courseName;
    expect(actual).eq(expected);
  });

  it('should log out from Admin', () => {
    Logout.logout();
  });
});

describe('START THE COURSE (AS A STUDENT)', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should go to courses page', () => {
    NewCourseCreatePage.open();
  });

  it('should open created course', () => {
    CourseStartPage.createdCourseOpen();
  });

  it('opened course page should have a correct h1 equal to the name of the course', () => {
    const actual = CourseStartPage.header.getText();
    const expected = newCourseCreate.courseName;
    expect(actual).eq(expected);
  });

  it('should press `Start course` button to start the course', () => {
    CourseStartPage.startCourse();
  });

  it('should display success message `Course loaded`', () => {
    const actual = CourseStartPage.successMsg.getText();
    const expected = 'Course loaded';
    expect(actual).eq(expected);
  });
});
