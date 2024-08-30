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

// ? Solution 1
// ? It's not dynamic
export const solution1 = (input: Input) => {
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
export const solution2 = (input: Input) => {
  let output: Output = {}; // Add type

  input.forEach(({ type, id, ...rest }) => {
    if (!output[type]) {
      output[type] = {};
    }
    output[type]![id] =  rest ;
  });

  return output;
};

export const solution3 = (input: Input): Output =>
  input.reduce<Output>((acc, { type, id, ...rest }) => {
    if (!acc[type]) {
      acc[type] = {};
    }
    acc[type]![id] = rest;
    return acc;
  }, {});