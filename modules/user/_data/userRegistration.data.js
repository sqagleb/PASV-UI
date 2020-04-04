import faker from 'faker';

const H1RegisterPage = 'User Register';
const H1LoginPage = 'User Login';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

// data to create new User:
const newUser = {
  firstName,
  lastName,
  password,
  phone: 12345434567,
  email,
  about: 'eat sleep code repeat',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
  country: 'Belarus',
};

const pageRegisterData = {
  h1: 'User Register',
  warningText: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

export { H1RegisterPage, H1LoginPage, newUser, pageRegisterData };
