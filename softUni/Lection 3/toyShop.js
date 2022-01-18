function toyShop(input) {

  let holidayCost = Number(input[0]);
  let puzzleQty = Number(input[1]);
  let dollQty = Number(input[2]);
  let bearQty = Number(input[3]);
  let minionQty = Number(input[4]);
  let truckQty = Number(input[5]);

  const puzzleCost = 2.60;
  const dollCost = 3;
  const bearCost = 4.10;
  const minionCost = 8.20;
  const truckCost = 2;

  let totalQty = 
    puzzleQty + dollQty + bearQty + minionQty + truckQty;

  let orderTotal = 
    (puzzleQty * puzzleCost) + (dollQty * dollCost)
    + (bearQty * bearCost) + (minionQty * minionCost)
    + (truckQty * truckCost);
          
  if(totalQty >= 50) {
    orderTotal = orderTotal * 0.75;
  }

  orderTotal *= 0.9;

  const difference = Math.abs(orderTotal - holidayCost);

  if(orderTotal >= holidayCost) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  }
  else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}
