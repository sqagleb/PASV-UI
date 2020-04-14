const pageTitle = 'FlashCards';
const progressBarAttribute = 'aria-valuenow';
const modalCreateCard = 'Create Flash Card';

const flashGroupContent = {
  mainView: 'Main view',
  compactView: 'Compact view',
  waitingForApproval: 'Waiting for approval',
  training: 'Training',
};

const waitingForApprovalData = {
  title: 'Waiting for approval',
  cardStatus: 'new',
};

const positive = {
  groupName: 'TestGroup',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: 'Absolutely no difference.',
};

const negative1 = {
  groupName: 'TestGroup',
  questionText: '',
  answerText: 'Absolutely no difference.',
};

const negative2 = {
  groupName: 'TestGroup',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: '',
};

const negative3 = {
  groupName: 'TestGroup',
  questionText: 'What is t',
  answerText: 'Absolutely no difference.',
};

const negative4 = {
  groupName: 'TestGroup',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: 'Absolutel',
};

export {
  pageTitle,
  progressBarAttribute,
  modalCreateCard,
  waitingForApprovalData,
  flashGroupContent,
  positive,
  negative1,
  negative2,
  negative3,
  negative4,
};