function gemuse(input) {
  let gemuse = input[0];
  switch (gemuse) {
    case `banana`:
    case `apple`:
    case `kiwi`:
    case "cherry":
    case "lemon":
    case "grapes":
      console.log(`fruit`);
      break;
    case `tomato`:
    case `cucumber`:
    case `carrot`:
    case "pepper":
      console.log(`vegetable`);
      break;
    default:
      console.log(`unknown`);
  }
}
