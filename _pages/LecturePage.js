import AppPage from './AppPage';
import GroupPage from './GroupPage';
import LoginPage from './LoginPage';
import { newLecture } from '../_data/groupLecture.data';
import GroupsListPage from "./GroupsListPage";
import MainPage from "./MainPage";
import Menu from "./Menu";
import LogoutPage from "./LogoutPage";

class LecturePage extends AppPage {
  get nameInput() {
    return $('[name="name"]');
  }

  get videoLinkInput() {
    return $('[name="video"]');
  }

  get activeCheckbox() {
    return $('[type="checkbox"]');
  }

  get dateInput() {
    return $('[placeholder="Date"]');
  }

  get descriptionInput() {
    return $('[name="description"]');
  }

  get homeworkInput() {
    return $('[name="homework"]');
  }

  get reviewerDropdown() {
    return $('[name="homeworkReviewer"]');
  }

  get saveBtn() {
    return $('[type="submit"]');
  }

  get lectureLink(){
    return $('[qa="link"]')
  }

  createLecture(role) {
    LoginPage.login(role);
    MainPage.smartClick(Menu.groupsLink);
    browser.waitUntil(()=> GroupsListPage.testGroup.isDisplayed())
    GroupsListPage.testGroup.click();
    GroupPage.createLectureBtn.click();
    this.nameInput.setValue(newLecture.name);
    this.videoLinkInput.setValue(newLecture.video);
    this.dateInput.setValue(newLecture.date);
    this.descriptionInput.setValue(newLecture.description);
    this.homeworkInput.setValue(newLecture.homework);
    this.saveBtn.click();
    LogoutPage.logout();
  }
}

export default new LecturePage();
