 function gorillaKong(input) {
  
  const budget = Number(input[0]);
  const people = Number(input[1]);
  const outfitPrice = Number(input[2]);

  const decor = budget * 0.1;
  
  let outfitCost = people * outfitPrice;

  if(people > 150) {
    outfitCost *= 0.9;
  }

  let total = decor + outfitCost;

  if(total > budget) {
    let difference = total - budget;
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
  }
  else { 
    let difference = budget - total;
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
  }

}

gVsK([9587.88, 222, 55.68]);