function solve(input) {
  let name = input[0];
  let num = input[1];
  let hours = num * 3;
  console.log(`The architect ${name} will need ${hours} hours to complete ${num} project/s.`);
}

solve([`babati`, 20]);