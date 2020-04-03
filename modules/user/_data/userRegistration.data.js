// https://github.com/marak/Faker.js/
import faker from  'faker'

const H1RegisterPage = 'User Register';
const H1LoginPage = 'User Login';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = Math.random() + 'test1@gmail.com';
const password = 'password';

// data to create new User:
const newUser = {
  firstName: firstName,
  lastName: lastName,
  password: password,
  phone: 12345434567,
  email: email,
  about: 'eat sleep code repeat',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
  country : 'Belarus',
};

// shouldn't use
const userRegisteredData = {
  firstName: 'John',
  lastName: 'Morgan',
  password: 'qwqwqw',
  phone: '14158706170',
 // email: 'irina_ger@yahoo.com',
  about: 'I am a student',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
};

const pageRegisterData = {
  h1: 'User Register',
  warningText: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

const successfulNotificationData = {
  successfulNotification: 'User created successfully. Please check your email and verify it'
};

const errorNotificationData = 'User with this e-mail exists';

export { H1RegisterPage, H1LoginPage, newUser, userRegisteredData, pageRegisterData, successfulNotificationData, errorNotificationData };
