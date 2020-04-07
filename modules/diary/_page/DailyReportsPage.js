import AppPage from '../../_page/AppPage';

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
    return browser.$('//*[@qa="day-report-item-0"]//*[@qa="description"]');
  }

  checkLast3Reports() {
    for (let i = 0; i < 3; i++) {
      browser.$(`[qa="day-report-item-${i}"]`);
    }
  }


}

export default new DailyReportsPage();