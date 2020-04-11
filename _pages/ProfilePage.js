import AppPage from './AppPage';

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

  checkElemLink(element, keyword) {
    return element.getAttribute('href').includes(keyword);
  }

  get menuItems () {
    return $$('[id=\'site-menu\'] a');
}

  get userDropdown () {
    return $('[id=\'user-section\'] [class=\'dropdown-toggle nav-link\']');
  }

  get logoutButton () {
    return $('[qa=\'logout-button\']');
  }

  get userDropdownProfile() {
    return $('[qa=\'profile-link\'] button');
  }

  get userDropdownSettings () {
    return $('[qa=\'settings-link\'] button');
  }

  get h1 () {
    return $('//h1');
  }


  userDropdownClick() {
    $('[id=\'user-section\'] [class=\'dropdown-toggle nav-link\']').click();
  }

  open() {
    $('[class="dropdown-toggle nav-link"]').click();
    $('[qa="profile-link"] button').click();
  }
}

export default new ProfilePage();

