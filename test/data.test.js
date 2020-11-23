import { 
  getScores,
  addscore,
  } from '../src/scoresApi/data';

test('1. Test the get data from API', () => {
  expect(getScores()).toBeDefined();
});

test('2. Getting the scores with no errors', () => {
  expect(getScores() instanceof Promise).toBeTruthy();
});

test('3. Adding scores with no errors', () => {
  expect(addscore('test', 0) instanceof Promise).toBeTruthy();
});