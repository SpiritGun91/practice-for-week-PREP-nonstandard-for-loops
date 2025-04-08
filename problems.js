function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const result = [];
  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  const result = [];
  const start = arr.length % 2 === 0 ? arr.length - 1 : arr.length - 2;
  for (let i = start; i >= 0; i -= 2) {
    result.push(arr[i]);
  }
  return result;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i - 1 > 0 && ((i - 1) & (i - 1 - 1)) === 0) {
      result.push(i);
    }
  }
  return result;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  if (arr.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // Check if the index is a power of n
    if (i > 0 && Math.pow(n, Math.round(Math.log(i) / Math.log(n))) === i) {
      result.push(arr[i]);
    }
  }
  return result;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const midpoint = Math.ceil(arr.length / 2);
  return arr.slice(0, midpoint);
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const midpoint = Math.ceil(arr.length / 2);
  return arr.slice(midpoint);
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
