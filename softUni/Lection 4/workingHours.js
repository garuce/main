function hourDay(inout) {
  let hour = inout[0];
  let day = inout[1];

  if (hour >= 10 && hour <= 18) {
    switch (day) {
      case `Monday`:
      case `Tuesday`:
      case `Wednesday`:
      case `Thursday`:
      case `Friday`:
      case `Saturday`:
        console.log(`open`);
        break;
      default:
        console.log(`closed`);
    }
  } else {
    console.log(`closed`);
  }
}

hourDay([`9`, `Sunday`]);
