const createDayReport = {
  h1: 'Create day report',
  checkMarksTitle: 'Marks to your daily report Required'
};

const instructionsToCheckMarks = {
  instructionToNeedHelp: 'Describe what difficulties you have, we will contact you and help',
  instructionToUnderstoodEverything: 'It means that you are not experiencing difficulties and understand',
  instructionToHelpedClassmates: 'Specify to whom and on what topic you helped'
};
const howWasYourDayInputsInvalid = [
  '',
  'Hello 123',
  'practiced code, read document'
]; // empty field, short input, 29 characters


const howWasYourDayInputs = [
  '!@#$%^&*()!@#$%^&*()<>?|":~+_-',
  '123456789123456789123456789123456789',
  'Привет! Как у вас дела? Нравится ли вам учиться?',
  'WRITE WHAT IS USEFUL FOR SELF-DEVELOPMENT, LEARNING, OR PRACTICE YOU DID TODAY',
  'Different fonts were used on the Harry Potter book covers, for its chapter title and elsewhere. ' +
  'The lettering used for the book title is very similar to a typeface called Hocus Pocus, ' +
  'which comes in four styles and each with a complete character set. As for the chapter titles and page numbers,' +
  ' a font called Able by Marcus Burlile resembles their lettering. For the handwriting of Rubeus Hagrid, ' +
  'it resembles Felt Tip Roman by Mark Simonson.',
  'practiced code, read documents'];
//5 scenarios: symbols, numbers, Russian alphabet text, capital letters, large text

const hoursStudiedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//all positive scenarios: any number from 0 to 10;

const hoursStudiedInputsInvalid = ['','восемь', '11', '111'];
// 3 negative scenarios: number entered as a word; two-digit number greater than 10; three digit number;


export {
  createDayReport,
  instructionsToCheckMarks,
  howWasYourDayInputs,
  hoursStudiedInputs,
  hoursStudiedInputsInvalid,
  howWasYourDayInputsInvalid
};