function basketball(input) {
  
  //Inputs

  let basketTax = Number(input[0]);

  //Equipment

  let shoes = basketTax - (basketTax * 0.4);
  let swag = shoes - (shoes * 0.2);
  let ball = swag * 0.25;
  let acc = ball * 0.2;

  //Totals

  let total = basketTax + shoes + swag + acc + ball;
  console.log(total);
}