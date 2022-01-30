function solve(input) {
  let n = Number(input[0]);

  let m = Number(input[1]);

  let sum = 0;

  let outputNumbers = "";

  for (let i = n; i < m; i++) {
    if (i % 9 === 0) {
      sum += i;
      outputNumbers += `${i}\n`;
    }
  }

  console.log(`The sum: ${sum}`);

  console.log(outputNumbers);
}

solve(["10", "400"]);
