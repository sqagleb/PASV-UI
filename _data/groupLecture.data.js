const name = 'Lecture-' + Math.random().toFixed(3);

const newLecture = {
  name,
  video: 'https://youtu.be/mHNng3hb4co',
  date: '02.25.2020',
  description: 'description-test-test-test-test-test-test',
  homework: 'homework-test-test-test',
  comment: 'this is a comment',
  markAsUnderstood: 'I understood this lecture.',
};

export { newLecture };
