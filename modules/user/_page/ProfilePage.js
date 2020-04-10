import AppPage from '../../_page/AppPage';

class ProfilePage extends AppPage {
  get createDayReportBtn() {
    return $('[qa="create-day-report-button"]');
  }

  get studentChart() {
    return $('.recharts-surface');
  }

  get socialLinks() {
    return $('[qa="social-links"]');
  }

  get diaryList() {
    return $('[qa="diary-list"]');
  }

  get updateListBtn() {
    return $("//button[@class='btn btn-secondary']");
  }

  get codewarsIcon() {
    return $('[qa="codewars"]');
  }

  get facebookIcon() {
    return $('[qa="facebook"]');
  }

  get linkedinIcon() {
    return $('[qa="linkedIn"]');
  }

  get githubIcon() {
    return $('[qa="github"]');
  }

  get coinsTotal() {
    return $('[qa="user-achievement"]');
  }

  get coinsTotalTopRight() {
    return $('[class="justify-content-end collapse navbar-collapse"] span');
  }

  checkElemLink(element, keyword) {
    return element.getAttribute('href').includes(keyword);
  }

  open() {
    $('[class="dropdown-toggle nav-link"]').click();
    $('[qa="profile-link"] button').click();
  }
}

export default new ProfilePage();
