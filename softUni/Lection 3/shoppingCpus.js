function shopping(input) {
  
  const budget = Number(input[0]);
  const gpuQty = Number(input[1]);
  const cpuQty = Number(input[2]);
  const ramQty = Number(input[3]);

  const nvidiaPrice = 250;
  const ryzenPrice = 0.35 * (nvidiaPrice * gpuQty);
  const ramPrice = 0.1 * (nvidiaPrice * gpuQty);
  
  let total = 
    gpuQty * nvidiaPrice + 
    cpuQty * ryzenPrice +
    ramQty * ramPrice;

  if(gpuQty >= cpuQty) {
    total *= 0.85;
  }

  if(total <= budget) {
    let money = budget - total;
    console.log(`You have ${money.toFixed(2)} leva left!`);
  }
  else {
    let money = total - budget;
    console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`);
  }
}