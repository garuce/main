function lunchBreak(input) {

  const series = input[0];
  const episode = Number(input[1]);
  const lunch = Number(input[2]);

  const food = lunch * 0.125;
  const chill = lunch * 0.25;

  let timeLeft = lunch - (food + chill);

  if(timeLeft > episode) {
    let minutes = timeLeft - episode;
    console.log(`You have enough time to watch ${series} and left with ${Math.ceil(minutes)} minutes free time.`);

  }
  else {
    let minutes = episode - timeLeft;
    console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(minutes)} more minutes.`)
  }
}