function solve(input) {
  let num = input[0];
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + Number(num[i]);
  }
  console.log(sum);
}

solve([`10458`]);
