function solve(input) {
  const n = Number(input[0]);
  for (let i = 0; i <= n; i += 2) {
    console.log();
  }
}

function solvee(input) {
  let n = Number(input[0]);

  let num = 1;

  for (let i = 0; i <= n; i += 2) {
    console.log(num);

    num = num * 2 * 2;
  }
}

solvee([10]);
