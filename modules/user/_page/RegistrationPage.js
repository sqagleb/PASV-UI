import AppPage from '../../_page/AppPage';
import { newUser } from '../_data/userRegistration.data';
import MainPage from '../../_page/MainPage';

class RegistrationPage extends AppPage {
  get firstNameInput() {
    return $('[name="firstName"]');
  }

  get lastNameInput() {
    return $('[name="lastName"]');
  }

  get cellPhoneNumberInput() {
    return $('[name="phone"]');
  }

  get emailInput() {
    return $('[name="email"]');
  }

  get passwordInput() {
    return $('[name="password"]');
  }

  get aboutInput() {
    return $('[name="about"]');
  }

  get myGoalsInput() {
    return $('[name="goals"]');
  }

  get countryOption() {
    return $('[name="countryName"]');
  }

  get englishLevelOption() {
    return $('[name="englishLevel"]');
  }

  get submitBtn() {
    return $('[type="submit"]');
  }

  open() {
    super.open('https://stage.pasv.us/user/register');
  }

  // method for create new user
  registerNewUser() {
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
  }
}
export default new RegistrationPage();
