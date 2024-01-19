// example.test.js 파일
import { sum } from './sum';

test('test sum function', () => {
  const result = sum(1, 1);
  expect(result).toBe(2);
});
