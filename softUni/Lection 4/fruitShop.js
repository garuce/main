function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const qty = Number(input[2]);

  let weekend = false;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      weekend = false;
      break;
    case "Saturday":
    case "Sunday":
      weekend = true;
      break;
    default:
      console.log(`error`);
  }

    switch (fruit) {
      case "banana":
      case "apple":
      case "orange":
      case "grapefruit":
      case "kiwi":
      case "pineapple":
      case "grapes":
        break;
      default:
        console.log(`error`);
    }

  if (fruit == "banana" && weekend == false) {
    let price = qty * 2.5;
    console.log(price.toFixed(2));
  } else if (fruit == "banana" && weekend == true) {
    let price = qty * 2.7;
    console.log(price.toFixed(2));
  } else if (fruit == "apple" && weekend == false) {
    let price = qty * 1.2;
    console.log(price.toFixed(2));
  } else if (fruit == "apple" && weekend == true) {
    let price = qty * 1.25;
    console.log(price.toFixed(2));
  } else if (fruit == "orange" && weekend == false) {
    let price = qty * 0.85;
    console.log(price.toFixed(2));
  } else if (fruit == "orange" && weekend == true) {
    let price = qty * 0.9;
    console.log(price.toFixed(2));
  } else if (fruit == "grapefruit" && weekend == false) {
    let price = qty * 1.45;
    console.log(price.toFixed(2));
  } else if (fruit == "grapefruit" && weekend == true) {
    let price = qty * 1.6;
    console.log(price.toFixed(2));
  } else if (fruit == "kiwi" && weekend == false) {
    let price = qty * 2.7;
    console.log(price.toFixed(2));
  } else if (fruit == "kiwi" && weekend == true) {
    let price = qty * 3;
    console.log(price.toFixed(2));
  } else if (fruit == "pineapple" && weekend == false) {
    let price = qty * 5.5;
    console.log(price.toFixed(2));
  } else if (fruit == "pineapple" && weekend == true) {
    let price = qty * 5.6;
    console.log(price.toFixed(2));
  } else if (fruit == "grapes" && weekend == false) {
    let price = qty * 3.85;
    console.log(price.toFixed(2));
  } else if (fruit == "grapes" && weekend == true) {
    let price = qty * 4.2;
    console.log(price.toFixed(2));
  }
}

fruitShop([`aple`, `Moday`, `20`]);
