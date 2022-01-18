function fishTank(input) {
   
  //Inputs

  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3] / 100);

  //Solution

  let volume = length * width * height;
  let volumeLiters = volume * 0.001;
  let total = volumeLiters * (1 - percent);
  
  console.log(total);
}