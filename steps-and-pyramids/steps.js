//console log stairs shape with n levels using '$' character

function steps(n, row = 0, stair = "") {
  if (n === row) return;

  //end of the row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "$" : " ";
  steps(n, row, stair + add);

  /*   let str = "$";
  for (let i = 1; i <= n; i++) {
    let spacesNumber = n - i;
    console.log(str.repeat(i) + " ".repeat(spacesNumber));
  } */
}

steps(5);
