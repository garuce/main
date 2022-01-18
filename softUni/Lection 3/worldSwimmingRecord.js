function swimmingRecord(input) {
  
  const recordS = Number(input[0]);
  const distM = Number(input[1]);
  const timeS = Number(input[2]);

  let time = distM * timeS;
  let totalTime = (Math.floor(distM / 15) * 12.5) + time;

  if(totalTime < recordS) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
  }
  else {
    let timeNeeded = totalTime - recordS; 
    console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
  }
  
}

