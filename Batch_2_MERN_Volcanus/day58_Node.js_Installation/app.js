export const avgCalulator = (arr) => {
  let avg;
  let sum = 0;
  let length = arr.length;
  for (let element of arr) {
    sum += element;
  }
  avg = sum / length;
  return avg;
};

export const sum = (a,b) => a+b;

export const ATMPINCODE = 1234567890