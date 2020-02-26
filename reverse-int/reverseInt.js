/*
    Reverse integer value
    reverseInteger(-51) ===-15
    reverseInteger(50)===5
    reverseInteger(400)===4
    reverseInteger(37)=73
    reverseInteger(-90)=-9
*/

function reverseInteger(num) {
  const reversed = num
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(num);
}
