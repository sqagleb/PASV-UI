import AppPage from '../../_page/AppPage';

class DiaryPage extends AppPage {

  open() {
    super.open('https://stage.pasv.us/diary');
  }

  goToDiaryPage() {
    super.click('//a[@qa="diary-link"]');
  }

  get approveBtn() {
    return $('[qa="approve-button"]');
  }
}

export default new DiaryPage();
