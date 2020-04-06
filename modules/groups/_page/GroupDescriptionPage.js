import AppPage from '../../_page/AppPage';

class GroupDescriptionPage extends AppPage {

  get descriptionTabBtn() {
    return $('//a[contains(text(),"Description")]');
  }

  get navigationBar() {
    return $('//ul[@class="mb-4 tabs nav"]');
  }
  get groupTitle() {
    return $('[qa="group-title"]');
  }
}

export default new GroupDescriptionPage();
