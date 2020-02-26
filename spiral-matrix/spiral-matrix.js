/*
matrix(4)
[
    [1, 2, 3, 4],
    [12,13,14,5],
    [11,16,15,6],
    [10, 9, 8,7]
]
*/

function matrix(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let startRow = 0,
    endRow = arr.length - 1,
    startColumn = 0,
    endColumn = arr.length - 1,
    counter = 1;
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      arr[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      arr[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  console.log(arr);
}
