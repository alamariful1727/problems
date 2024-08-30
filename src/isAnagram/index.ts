type Input = {
  str1: string;
  str2: string;
};

export const solution1 = ({ str1, str2 }: Input) =>
  str1.split('').sort().join('') === str2.split('').sort().join('');

export const solution2 = ({ str1, str2 }: Input): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  // Initialize character count maps for str1
  const count: Record<string, number> = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    // Increment the count for char1 from str1
    count[char1] = (count[char1] || 0) + 1;

    // Decrement the count for char2 from str2
    count[char2] = (count[char2] || 0) - 1;
  }

  // Check if all counts are zero
  return Object.values(count).every(value => value === 0);
};