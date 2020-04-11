import AppPage from './AppPage';
import { newCourseCreate } from '../_data/courseStart.data';

class CourseStartPage extends AppPage {
  createdCourseOpen() {
    return $(`//a[text()="${newCourseCreate.courseName}"]`).click();
  }

  get header() {
    return $('//h1');
  }

  get startCourseBtn() {
    return $('//button[@class="btn btn-primary"]');
  }

  get successMsg() {
    return $(
      '//*[@class="notifications-wrapper"]//*[@class="notification-title"]',
    );
  }

  startCourse() {
    this.startCourseBtn.click();
  }
}

export default new CourseStartPage();
