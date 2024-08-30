import assert from 'node:assert'

type Shape = {
  id: string;
  x: number;
  y: number;
  color: string;
};

type Circle = Shape & {
  type: 'circle';
  radius: number;
};

type Rectangle = Shape & {
  type: 'rectangle';
  width: number;
  height: number;
};

type Input = Array<Circle | Rectangle>;

type Output = {
  circle?: Record<string, Omit<Circle, 'id' | 'type'>>;
  rectangle?: Record<string, Omit<Rectangle, 'id' | 'type'>>;
};


const input: Input = [
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

const expected: Output = {
  circle: {
    '1111': { x: 30, y: 50, color: '#FF8200', radius: 14 },
    '2222': { x: 50, y: 250, color: '#80ADCE', radius: 56 },
  },
  rectangle: {
    '3333': { x: 90, y: 160, color: '#FF8200', width: 140, height: 320 },
    '4444': { x: 32, y: 684, color: '#FF8200', width: 164, height: 983 },
  },
};

// ? Solution 1
// ? It's not dynamic
const solution1 = (input: Input) => {
  let output: Output = {}; // Add type

  input.forEach((v) => {
    if (v.type === 'circle') {
      output.circle = {
        ...output.circle,
        [v.id]: { x: v.x, y: v.y, color: v.color, radius: v.radius },
      };
    } else {
      output.rectangle = {
        ...output.rectangle,
        [v.id]: {
          x: v.x,
          y: v.y,
          color: v.color,
          width: v.width,
          height: v.height,
        },
      };
    }
  });

  return output;
};

// ? Solution 2
// ? Dynamic type
const solution2 = (input: Input) => {
  let output: Output = {}; // Add type

  input.forEach(({ type, id, ...rest }) => {
    if (!output[type]) {
      output[type] = {};
    }
    output[type]![id] =  rest ;
  });

  return output;
};

const solution3 = (input: Input): Output =>
  input.reduce<Output>((acc, { type, id, ...rest }) => {
    if (!acc[type]) {
      acc[type] = {};
    }
    acc[type]![id] = rest;
    return acc;
  }, {});

assert.deepStrictEqual(solution1(input), expected);
assert.deepStrictEqual(solution2(input), expected);
assert.deepStrictEqual(solution3(input), expected);
console.log("Passed")