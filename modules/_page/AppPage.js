export default class AppPage {
  open(path) {
    browser.maximizeWindow();
    browser.url(path);
  }
}
