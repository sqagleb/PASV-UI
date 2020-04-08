import AppPage from "../../_page/AppPage";
import Menu from "../../_page/Menu";

class GroupsListPage extends AppPage {
  open() {
    Menu.groupsLink.click();
  }

  get testGroup() {
    return $('//a[contains(text(),"TEST GROUP")]');
  }

  get testLecture() {
    return $('//span[contains(text(),"Test Lecture")]');
  }

  get understoodBtn() {
    return $('//button[@class="btn btn-success btn-sm"]');
  }

  get understoodText() {
    return $('//div[@class="alert alert-success fade show"]');
  }

  get likeBtn() {
    return $('.btn-primary');
  }

  get btnBadge() {
    return $('//span[@class="badge badge-secondary"]');
  }

  get dislikeBtn() {
    return $('//button[@class="btn btn-secondary btn-sm"]');
  }

  get homeworkTextBox() {
    return $('//textarea[@name="homework"]');
  }

  get sendHomeworkBtn() {
    return $('//button[@class="btn btn-secondary"]');
  }

  get newHomeworkBadge() {
    return $('//span[@class="mr-2 badge badge-primary-light"]');
  }

  get commentTextBox() {
    return $('//textarea[@name="content"]');
  }

  get addCommentBtn() {
    return $('form > .btn.btn-secondary');
  }

  get commentConfirmation() {
    return $('//div[@class="notification notification-success notification-visible"]');
  }

  get refreshCommentBtn() {
    return $('//button[contains(text(),"Refresh comments")]');
  }

  get disabledCommentBtn() {
    return $('//button[@class="btn btn-secondary disabled"]');
  }
}



export default new GroupsListPage();