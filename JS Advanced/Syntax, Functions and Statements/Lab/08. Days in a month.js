function daysInAMonth(month, year) {
    const date = new Date(year, month, 0);
    console.log(date.getDate());
}
daysInAMonth(2, 2021);