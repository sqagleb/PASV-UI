class Menu {


  get coursesLink() {
    return $('[qa="courses-link"]');
  }

  get cardsLink() {
    return $('[qa="cards-link"]');
  }

  get groupsLink() {
    return $('[qa="groups-link"]');
  }

  get challengeLink() {
    return $('//li[@class="nav-item"]//a[text() ="Challenge"]');
  }

}

export default new Menu();
