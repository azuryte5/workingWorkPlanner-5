// This is the content within the text box
var work=$("#hour-9").val();


// This shows the date that gets posted on the page
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

var count = []
for (var i = 9; i < 18; i++){
    count.push({
    id: i,
    text:"placeholder"
    });
};
console.log(count[0])
$( "#hour-" ).attr( "id", "#hour-" + count[0].id)
//<textarea id="hour-9" class="col description"></textarea>
//             id="hour-"+ count[i]

// DAMN IT DIDn't WORK
// I need to add a complete ID to the tags and then call and save them as whole. I wasn't able to refer to a split half id.

//$( "#hour-" ).attr( "id", "#hour-"+count[0] );
//each?
//find?
//trim?
//attr?

//count array built up to 8 the length of the table

//plannerArray = [ 9,10,11 ,12 ,13 ,14 ,15,16.17 ]
// console.log(plannerArray)

// console.log(plannerArray[7]===hour)

// plannerArray = [ 9,10,11 ,12 ,13 ,14 ,15,16];

// for (var i=0; i > plannerArray.length; i++){
// if (plannerArray[i]===hour) {
//     $("#hour-"+ plannerArray[i]).addClass("present")
//     console.log(i)
//     return hour};
// if (i>plannerArray.length) {

// This is a number which helps determine if it has happened yet
var hour = new Date().getHours()
console.log(hour)
// This is a hA to see if we match the text of the box
var actualHour = moment().format("hA");
//when actualHour and spell match they will be green!
console.log(actualHour)
var spell = document.getElementById("hour")
console.log(spell.textContent)
// Here is the selector for just 9. If it matches it will be green. Please make spell the array thing. 
if (spell.textContent === actualHour) {
$("#hour-9").addClass("present")
} else if (9 > hour) {
$("#hour-9").addClass("future")
} else {
    $("#hour-9").addClass("past")    
}

// if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(taskEl).addClass("list-group-item-warning");
//   }

// // var everyHour =function(){setInterval(hourlyTimer(),5000)};
// everyHour()

//CAN I BUILD AN ARRAY FOR ALL OF THIS?
$("#button-9").on("click", function(){
    //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
    work=$("#hour-9").val()
    console.log(work)
    $("#hour").html("<p class='text-success'>Saving Successful ✓</p>");
    setTimeout(function() {
    $("#hour").html("9 am")    
    }, 2000);
    
    saveTasks(work)
})

var saveTasks = function(work) {
    localStorage.setItem("9amSlot", JSON.stringify(work));
  };

var loadTasks = function() {
    work = JSON.parse(localStorage.getItem("9amSlot"));
    $("#hour-9").val(work);
}

loadTasks();