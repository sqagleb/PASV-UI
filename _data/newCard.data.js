const groupNameLink = 'Test Group Feb 16';
const pageTitle = 'FlashCards';
const progressBarAttribute = 'aria-valuenow';
const modalCreateCard = 'Create Flash Card';

const flashGroupContent = {
  mainView: 'Main view',
  compactView: 'Compact view',
  waitingForApproval: 'Waiting for approval',
  training: 'Training'
};

const waitingForApprovalData = {
  header: 'TestGroup',
  title: 'Waiting for approval',
  moduleTitle: 'Create Flash Card',
  cardStatus: 'new'
};

const positive = {
  groupName: 'Test Group Feb 16',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: 'Absolutely no difference.',
};

const negative1 = {
  groupName: 'Test Group Feb 16',
  questionText: '',
  answerText: 'Absolutely no difference.',
};

const negative2 = {
  groupName: 'Test Group Feb 16',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: '',
};

const negative3 = {
  groupName: 'Test Group Feb 16',
  questionText: 'What is t',
  answerText: 'Absolutely no difference.',
};

const negative4 = {
  groupName: 'Test Group Feb 16',
  questionText: 'What is the difference between the first test and the second one?',
  answerText: 'Absolutel',
};

export {
  groupNameLink,
  pageTitle,
  progressBarAttribute,
  modalCreateCard,
  waitingForApprovalData,
  flashGroupContent,
  positive,
  negative1,
  negative2,
  negative3,
  negative4
};