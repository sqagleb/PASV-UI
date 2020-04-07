import AppPage from '../../_page/AppPage';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import LogoutPage from '../../user/_page/LogoutPage';
import MainPage from "../../_page/MainPage";
import {newGroup} from "../_data/groupCreate.data";

class GroupPage extends AppPage {

  get groupTitle() {
    return $('[qa="group-title"]');
  }

  get quizTabBtn() {
    return $('//a[contains(text(),"Quiz")]');
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

  get createLectureBtn(){
    return $('[qa="create-lecture-button"]')
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
