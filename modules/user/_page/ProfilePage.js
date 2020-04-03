import AppPage from '../../_page/AppPage';

class ProfilePage extends AppPage {
  get createDayReportBtn() {
    return $('[qa="create-day-report-button"]');
  }

  get likeBtn() {
    return $("//button[@class='btn btn-outline-primary btn-sm']");
  }

  get updateListBtn() {
    return $("//button[@class='btn btn-secondary']");
  }

  get codeWarsIcon() {
    return $('[qa="codewars"]');
  }

  get facebookIcon() {
    return $('[qa="facebook"]');
  }

  get linkedInIcon() {
    return $('[qa="linkedIn"]');
  }

  get coinTotal() {
    return $('//div[@qa="user-achievement"]//span');
  }

  get coinTotalTopRight() {
    return $('//div[@class="justify-content-end collapse navbar-collapse"]//span');
  }

  goToProfilePage() {
    $('//a[@class="dropdown-toggle nav-link"]').click();
    $('//button[contains(text(), "Profile")]').click();
  }
}

export default new ProfilePage();
