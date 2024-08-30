import { expect, describe, it } from 'vitest';
import { solution1, solution2, solution3 } from './';

const input = [
  {
    id: '1111',
    x: 30,
    y: 50,
    color: '#FF8200',
    type: 'circle',
    radius: 14,
  },
  {
    id: '2222',
    x: 50,
    y: 250,
    color: '#80ADCE',
    type: 'circle',
    radius: 56,
  },
  {
    id: '3333',
    x: 90,
    y: 160,
    color: '#FF8200',
    type: 'rectangle',
    width: 140,
    height: 320,
  },
  {
    id: '4444',
    x: 32,
    y: 684,
    color: '#FF8200',
    type: 'rectangle',
    width: 164,
    height: 983,
  },
];

const expected = {
  circle: {
    '1111': { x: 30, y: 50, color: '#FF8200', radius: 14 },
    '2222': { x: 50, y: 250, color: '#80ADCE', radius: 56 },
  },
  rectangle: {
    '3333': { x: 90, y: 160, color: '#FF8200', width: 140, height: 320 },
    '4444': { x: 32, y: 684, color: '#FF8200', width: 164, height: 983 },
  },
};

describe('Transform array', () => {
  describe('Solution 1', () => {
    it('should transform the input array into the expected object', () => {
      const result = solution1(input);
      expect(result).toStrictEqual(expected);
    });
  });
  
  describe('Solution 2', () => {
    it('should transform the input array into the expected object', () => {
      const result = solution2(input);
      expect(result).toStrictEqual(expected);
    });
  });
  
  describe('Solution 3', () => {
    it('should transform the input array into the expected object', () => {
      const result = solution3(input);
      expect(result).toStrictEqual(expected);
    });
  });
});