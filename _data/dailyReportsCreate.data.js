const createDayReport = {
  h1: 'Create day report',
};

const howWasYourDayInputsInvalid = [
  '',
  'Hello 123',
  'practiced code, read document'
]; // empty field, short input, 29 characters


const howWasYourDayInputs = [
  '!@#$%^&*()!@#$%^&*()<>?|":~',
  '123456789123456789123456789',
  'Привет!Желаю вам всего хорошего!',
  'WRITE WHAT IS USEFUL FOR SELF-DEVELOPMENT',
  'Different fonts were used on the Harry Potter book covers, for its chapter title and elsewhere.',
  'practiced code, read documents'];
//5 scenarios: symbols, numbers, Russian alphabet text, capital letters, large text

const hoursStudiedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//all positive scenarios: any number from 0 to 10;

const hoursStudiedInputsInvalid = ['','восемь', '11', '111'];
// 3 negative scenarios: number entered as a word; two-digit number greater than 10; three digit number;


export {
  createDayReport,
  howWasYourDayInputs,
  hoursStudiedInputs,
  hoursStudiedInputsInvalid,
  howWasYourDayInputsInvalid
};