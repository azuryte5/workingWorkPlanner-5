// Old time is greyed out
// current time is red
// future time is green
//icon for save button
//center header

//today

var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

