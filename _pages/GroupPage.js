import AppPage from './AppPage';
import LoginPage from './LoginPage';
import Menu from './Menu';
import LogoutPage from './LogoutPage';
import MainPage from './MainPage';
import { newGroup } from '../_data/groupCreate.data';

class GroupPage extends AppPage {
  get groupTitle() {
    return $('[qa="group-title"]');
  }
  get editBtn() {
    return $('[qa="edit-button"]');
  }
  get showAllBtn() {
    return $('//button[contains(text(),"Show all")]');
  }

  get addQuizBtn() {
    return $('//button[contains(text(),"Add")]');
  }

  get removeQuizBtn() {
    return $('//button[contains(text(),"Remove")]');
  }
  get createGroupBtn() {
    return $('.btn.btn-secondary');
  }

  get groupNameInput() {
    return $('[name="name"]');
  }

  get groupDescriptionInput() {
    return $('[name="description"]');
  }

  get accessTypeDropbox() {
    return $('[name="accessType"]');
  }

  get createBtn() {
    return $('[type="submit"]');
  }

  get createLectureBtn() {
    return $('[qa="create-lecture-button"]');
  }

  get descriptionTextArea() {
    return $('[name="description"]');
  }

  get saveBtn() {
    return $('[type="submit"]')
  }

  createNewGroup(role) {
    LoginPage.login(role);
    MainPage.smartClick(Menu.groupsLink);
    MainPage.smartClick(this.createGroupBtn);
    this.groupNameInput.setValue(newGroup.name);
    this.groupDescriptionInput.setValue(newGroup.description);
    this.accessTypeDropbox.selectByVisibleText(newGroup.access);
    MainPage.smartClick(this.createBtn);
    LogoutPage.logout();
  }
}

export default new GroupPage();
