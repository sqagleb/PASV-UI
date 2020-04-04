import AppPage from '../../_page/AppPage';
import { newUser, H1RegisterPage, H1LoginPage } from '../_data/userRegistration.data';
import MainPage from '../../_page/MainPage';

class RegistrationPage extends AppPage {
  get firstNameInput() {
    return $('//form//input[@name="firstName"]');
  }

  get lastNameInput() {
    return $('//form//input[@name="lastName"]');
  }

  get cellPhoneNumberInput() {
    return $('//form//input[@name="phone"]');
  }

  get emailInput() {
    return $('//form//input[@name="email"]');
  }

  get passwordInput() {
    return $('//form//input[@name="password"]');
  }

  get aboutInput() {
    return $('//form//textarea[@name="about"]');
  }

  get myGoalsInput() {
    return $('//form//textarea[@name="goals"]');
  }

  get countryOption() {
    return $('//form//select[@name="countryName"]');
  }

  get englishLevelOption() {
    return $('//form//select[@name="englishLevel"]');
  }

  get submitBtn() {
    return $('//form//button[@type="submit"]');
  }

  open() {
    super.open('https://stage.pasv.us/user/register');
  }

  // method for create new user
  newUserRegisterVerifyH1() {
    this.firstNameInput.setValue(newUser.firstName);
    this.lastNameInput.setValue(newUser.lastName);
    this.cellPhoneNumberInput.setValue(newUser.phone);
    this.emailInput.setValue(newUser.email);
    this.passwordInput.setValue(newUser.password);
    this.aboutInput.setValue(newUser.about);
    this.myGoalsInput.setValue(newUser.goals);
    this.countryOption.selectByVisibleText(newUser.country);
    this.englishLevelOption.selectByVisibleText(newUser.englishLevel);
    MainPage.smartClick(this.submitBtn);
    browser.waitUntil(() => MainPage.header.getText() === H1LoginPage, 5000);
  }
}
export default new RegistrationPage();
