import AppPage from './AppPage';

class HomePage extends AppPage {
  get loginLink() {
    return $('[qa="login-link"]');
  }

  get registerLink() {
    return $('[qa="register-link"]');
  }

  get paragraphBlocksList() {
    return $$('.intro');
  }

  get supportEmail() {
    return $('//small[@qa="app-slogan"]/a');
  }

  open() {
    super.open('https://stage.pasv.us/');
  }
}

export default new HomePage();
