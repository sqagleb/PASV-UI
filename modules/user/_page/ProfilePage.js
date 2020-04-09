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
    return $('[qa="user-achievement"] span');
  }

  get coinsTotalTopRight() {
    return $('[class="justify-content-end collapse navbar-collapse"] span');
  }

  checkElemLink(link, keyword) {
    return link.getAttribute('href').includes(keyword) && link.getAttribute('target') === '_blank';
  }

  open() {
    $('[class="dropdown-toggle nav-link"]').click();
    $('[qa="profile-link"] button').click();
  }
}

export default new ProfilePage();

