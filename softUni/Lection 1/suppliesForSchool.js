function supplies(input) {
  //inputs hardcoded as pen, sharpie, chemicals, discount percentage.
  let pricePen = 5.80;
  let priceSharpie = 7.20;
  let priceChem = 1.20;
  let sum = (input[0] * pricePen) + (input[1] * priceSharpie) + (input[2] * priceChem);
  let finalSum = sum - (sum * (input[3] / 100));
  console.log(finalSum);
  
}

supplies([1, 1, 1]);