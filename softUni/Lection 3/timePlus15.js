function timePlus(input) {
  let hours = Number(input[0]);
  let min = Number(input[1]);
  let newMin = min + 15;
  if(newMin > 59) {
    hours += 1;
    newMin -= 60;
  }
  if(hours > 23) {
    hours = 0;
  }
  if(newMin < 10) {
    console.log(`${hours}:0${newMin}`);
  }
  else {
    console.log(`${hours}:${newMin}`);
  }
}

timePlus([23, 59]);