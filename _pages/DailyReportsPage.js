import AppPage from './AppPage';

class DailyReportsPage extends AppPage {

  open() {
    super.open('https://stage.pasv.us/diary');
  }

  get approveBtn() {
    return $('[qa="approve-button"]');
  }

  get likeBtn() {
    return $('[qa="like-button"]');
  }

  get createDayReportBtn() {
    return browser.$('[qa="create-day-report-button"]');
  }

  get newDayReport() {
    return browser.$('[class="mt-2"]');
  }

}

export default new DailyReportsPage();