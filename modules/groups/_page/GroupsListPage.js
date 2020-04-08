import AppPage from "../../_page/AppPage";
import Menu from "../../_page/Menu";
import {newGroup} from "../_data/groupCreate.data";

class GroupsListPage extends AppPage {
  open(){
    Menu.groupsLink.click();
  }

  get testGroup() {
    return $(`//a[contains(text(),"${newGroup.name}")]`);
  }
}

export default new GroupsListPage();