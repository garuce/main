function foodDelivery(input) {
  
  //Inputs
  
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veggieMenu = Number(input[2]);
  
  //Prices

  let chickenPrice = 10.35;
  let fishPrice = 12.40;
  let veggiePrice = 8.15;
  let deliveryPrice = 2.50;

  //Costs
  
  let chickenCost = chickenPrice * chickenMenu;
  let fishCost = fishPrice * fishMenu;
  let veggieCost = veggiePrice * veggieMenu;
  let menusCost = (chickenCost + fishCost + veggieCost);
  let dessertCost = menusCost * 0.2;
  
  //Totals

  let totalCost = menusCost + dessertCost + deliveryPrice;
  console.log(totalCost);
}