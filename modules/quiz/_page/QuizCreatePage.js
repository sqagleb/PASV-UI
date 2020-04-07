import AppPage from '../../_page/AppPage';
import LoginPage from '../../user/_page/LoginPage';
import { newQuiz } from '../_data/createQuiz.data';

class QuizCreatePage extends AppPage {
  get createQuizBtn() {
    return $('btn.btn-primary');
  }

  get nameInput() {
    return $('[name="name"]');
  }

  get descriptionInput() {
    return $('[name="description"]');
  }

  get mistakesInput() {
    return $('[placeholder="Acceptable mistakes"]');
  }

  get saveBtn() {
    return $('[type="submit"]');
  }

  get activeCheckbox() {
    return $('[type="checkbox"]');
  }

  open() {
    super.open('https://stage.pasv.us/quiz');
  }

  createQuiz(role) {
    LoginPage.login(role);
    this.open();
    this.createQuizBtn.click();
    this.nameInput.setValue(newQuiz.name);
    this.descriptionInput.setValue(newQuiz.description);
    this.mistakesInput.setValue(0);
    this.saveBtn.click();
  }
}

export default QuizCreatePage;
