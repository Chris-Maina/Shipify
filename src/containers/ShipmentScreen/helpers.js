export const getId = digits => {
  digits = digits.split('')
  if (digits[digits.length -1] < 9) {
    digits[digits.length - 1]++;
    return digits.join('');
  }
  return addOne(digits, digits.length - 1);
};


const addOne = (digits, lastPosition) => {
  // if there is no digit at the lastPosition, add 1
  if (!digits[lastPosition]) {
    digits.unshift(1);
    return digits.join('');
  }
  // if the digit at the lastPosition is less than 9, increment
  if (digits[lastPosition] < 9) {
    digits[lastPosition]++;
    return digits.join('');
  }
  // add 0 to the last position
  digits[lastPosition] = 0;
  return addOne(digits, lastPosition - 1);
}

export const search = (searchText, data) =>
  data.reduce((acc, next) => {
    next.id &&
      next.id.toLowerCase().includes(searchText.toLowerCase()) &&
      acc.push(next);
    return acc;
  }, []);
