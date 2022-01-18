function animal(input) {
  let type = input[0];
  if(type == `dog`) {
    console.log(`mammal`);
  }
  else if(type == `snake` || type == `crocodile` || type == `tortoise`) {
    console.log(`reptile`);
  }
  else {
    console.log(`unknown`);
  }
}