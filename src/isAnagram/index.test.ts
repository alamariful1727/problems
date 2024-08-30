import { expect, describe, it } from 'vitest';
import { solution1, solution2 } from './';

const testCases = [
  { input: { str1: 'nagaram', str2: 'anagram' }, expected: true },
  { input: { str1: 'a', str2: 'ba' }, expected: false },
  { input: { str1: 'aaa', str2: 'aaaa' }, expected: false },
  { input: { str1: 'bb', str2: 'aa' }, expected: false },
  { input: { str1: 'aaaa', str2: 'bbbb' }, expected: false },
  { input: { str1: 'abcdefghi', str2: 'ihgfedcba' }, expected: true },
];

describe('Is anagram', () => {
  describe('Solution 1', () => {
    testCases.forEach((testCase) => {
      it(`str1: ${testCase.input.str1} | str2: ${testCase.input.str2} | expected: ${testCase.expected}`, () => {
        expect(solution1(testCase.input)).toStrictEqual(testCase.expected);
      });
    });
  });

  describe('Solution 2', () => {
    testCases.forEach((testCase) => {
      it(`str1: ${testCase.input.str1} | str2: ${testCase.input.str2} | expected: ${testCase.expected}`, () => {
        expect(solution2(testCase.input)).toStrictEqual(testCase.expected);
      });
    });
  });
});

