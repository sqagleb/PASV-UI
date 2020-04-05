
import AppPage from '../../_page/AppPage';

class DayReportLikePage extends AppPage {

  get diaryLink() {
    return $('[qa="diary-link"]').click();
  }

  get h1() {
    return $('h1');

  }

  get likeBtn() {
    return $('[qa="like-button"]');
  }

  open() {
    super.open('https://stage.pasv.us/diary');
  }
}

export default new DayReportLikePage();
