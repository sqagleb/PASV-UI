
import AppPage from '../../_page/AppPage';

class DayReportLikePage extends AppPage {

  get diaryLink() {
    return $('[qa="diary-link"]').click();
  }

  get header() {
    return browser.$('h1');
  }

  get likeBtn() {
    return $('[qa="like-button"]');
  }

}

export default new DayReportLikePage();
