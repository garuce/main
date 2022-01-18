function solve(input) {
  let depositSum = Number(input[0]);
  let time = Number(input[1]);
  let percent = Number(input[2]);
  let interest = (depositSum * percent) / 100;
  let interestPm = interest / 12; 
  let sum = depositSum + time * interestPm;
  console.log(sum);
}

solve(['200', '3', '5.7']);