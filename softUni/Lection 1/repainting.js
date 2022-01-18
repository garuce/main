function repainting(input) {
//      INPUTS
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let workHours = Number(input[3]);
//      PRICES
  const nylonPerSqM = 1.50;
  const paintLiters = 14.50;
  const alcLiters = 5.00;
//      EXTRAS
  let extraNylon = 2;
  let extraPaint = 0.1;
  let bagCost = 0.4;
//      Solution
  const nylonCost = (nylon + extraNylon) * nylonPerSqM;
  const psintCost = (paint + (paint * extraPaint)) * paintLiters;
  const thinnerCost = thinner * alcLiters;
  const materialCost = nylonCost + psintCost + thinnerCost + bagCost;
//      WORKERS
  const workerCostPerHour = materialCost * 0.3;
  const totalWorkCost = workHours * workerCostPerHour;
  const totalCost = totalWorkCost + materialCost;
  console.log(totalCost);
}
repainting([10, 11, 4, 8])