import AppPage from "../../_page/AppPage";
import Menu from "../../_page/Menu";

class GroupsListPage extends AppPage {
  open(){
    Menu.groupsLink.click();
  }

  get testGroup() {
    return $('//a[contains(text(),"TEST GROUP")]');
  }
}

export default new GroupsListPage();