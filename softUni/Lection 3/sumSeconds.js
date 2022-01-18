function sumSec(input) {
  let sec0 = Number(input[0]);
  let sec1 = Number(input[1]);
  let sec2 = Number(input[2]);
  let sum = sec0 + sec1 + sec2;
  let min = Math.floor(sum / 60);
  let sec = sum % 60;
  if(sec < 10) {
    console.log(`${min}:0${sec}`)
  }
  else {
    console.log(`${min}:${sec}`)
  }
}

sumSec([10, 50, 80]);