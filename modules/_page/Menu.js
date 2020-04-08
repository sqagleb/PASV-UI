class Menu {
  get profileDropdown() {
    return $('//a[@class="dropdown-toggle nav-link"]');
  }

  get profileBtn() {
    return $('//button[contains(text(),"Profile")]');
  }

  get coursesLink() {
    return $('[qa="courses-link"]');
  }

  get cardsLink() {
    return $('[qa="cards-link"]');
  }

  get diaryLink() {
    return $('[qa="diary-link"]');
  }

  get groupsLink() {
    return $('[qa="groups-link"]');
  }

  get challengeLink() {
    return $('//li[@class="nav-item"]//a[text() ="Challenge"]');
  }

  get siteName() {
    return $('#site-name');
  }

  get navigationBar() {
    return $('#site-menu');
  }

  get mainBar() {
    return $('#main-bar');
  }
}

export default new Menu();
