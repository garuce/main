function vacationList(input) {
  let numPages = input[0];
  let pagesPerHour = input[1];
  let days = input[2];
  let totalPages = numPages / pagesPerHour;
  let hoursPerDay = totalPages / days;
  console.log(hoursPerDay);
}

vacationList([212, 20, 2]);