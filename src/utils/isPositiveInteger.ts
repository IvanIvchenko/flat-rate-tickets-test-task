export const isPositiveInteger = (num: string): boolean => {
  const n = Number(`${num}`);
  return n > 0 && n % parseInt(`${num}`) === 0;
};
