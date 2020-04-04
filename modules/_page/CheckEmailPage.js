import AppPage from './AppPage';

class CheckEmailPage extends AppPage {
  get header() {
    return $('//h1');
  }

  get successMsg() {
    return $('//h4[@class="notification-title"]');
  }

  get tryAgainLink() {
    return $('//a[text()="try again"]');
  }

  open(path) {
    super.open('https://stage.pasv.us/user/password/reset/mailed');
  }
}

export default new CheckEmailPage();
