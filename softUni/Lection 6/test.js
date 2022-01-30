function solve(inp) {
  let n = inp[0];
  let m = inp[1];
  let sum = 0;
  let num = 0;
  for (let i = n; i < m; i++) {
    if (i % 9 == 0) {
      sum += i;
      console.log(sum);
      num = i;
      console.log(num);
    }
  }
}

solve([`100`, `200`]);
