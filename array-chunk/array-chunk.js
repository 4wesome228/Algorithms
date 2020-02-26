/*
 Given an array and chunk size,divie the array into many subarrays
 where each subbarray is of length size
*/

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const sliced = array.slice(index, index + size);
    chunked.push(sliced);
    index += size;
  }
  return chunked;
}
