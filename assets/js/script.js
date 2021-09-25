// This is the content within the text box
//var work=$("#hour-9").val();
// Now I'm trying to add i to it

// This shows the date that gets posted on the page
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

var count = []
for (var i = 9; i < 18; i++){
    count.push({
    id: "hour-"+ i,
    text: "text-" +i,
    button: "button-" +i,
    textArea: " "});

$("div")
};
//change to section? add to div

// var selector = document.getElementById("text-"+ 11)
// console.log(selector)
// selector=selector.innerHTML
// console.log(selector)
// console.log($("#text-"+11))
// var taskSelected = document.querySelector(
//     ".task-item[data-task-id='" + taskId + "']"
//    );
//$("#test").setAttribute("id", "hour-" + count[0].id)
// TRY another way to build and add an ID
//$( "#hour-" ).attr( "id", "#hour-" + count[0].id)
//<textarea id="hour-9" class="col description"></textarea>
//             id="hour-"+ count[i]

// DAMN IT DIDn't WORK
// I need to add a complete ID to the tags and then call and save them as whole. I wasn't able to refer to a split half id.

// $( "#hour-" ).attr( "id", "#hour-"+count[0] );
$(".saveBtn").on("click", function(){
var slotNumber = $(this).parent().attr("id");
var textArea = $(this).siblings(".description").val();
$(this.hour).after("<p class='text-success'>Saving Successful ✓</p>");
    setTimeout(function() {
    $(".hour").after("")    
    }, 2000);
localStorage.setItem(slotNumber, textArea);
});
//each?
//find?
//trim?
//attr? change and over

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
var currentTime = document.getElementById("hour-"+hour)
console.log(currentTime.textContent)
// Here is the selector for just 9. If it matches it will be green. Please make spell the array thing.

for (var i = 9; i < 18; i++){ 
if (currentTime.textContent === actualHour) {
$("#text-"+hour).addClass("present")
}; 
if (i > hour) {
$("#text-"+i).addClass("future")
} else {
    $("#text-"+i).addClass("past")    
}
// $("#button-i").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     var work=$("#text-"+i).val()
//     console.log(work)
//     $("#hour-"+i).html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour").html(i+"am")    
//     }, 2000);
    
//     localStorage.setItem(i+"Slot", JSON.stringify(work));
   
}
// if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(taskEl).addClass("list-group-item-warning");
//   }

// // var everyHour =function(){setInterval(hourlyTimer(),5000)};
// everyHour()

// //CAN I BUILD AN ARRAY FOR ALL OF THIS?
// $("#button-9").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-9").val()
//     console.log(work)
//     $("#hour-9").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-9").html("9am")    
//     }, 2000);
//     localStorage.setItem("9amSlot", JSON.stringify(work));
//     // saveTasks(work)
// })


// $("#button-10").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-10").val()
//     console.log(work)
//     $("#hour-10").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-10").html("10am")    
//     }, 2000);
//     localStorage.setItem("10amSlot", JSON.stringify(work));
//     // saveTasks(work)
// })

// $("#button-11").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-11").val()
//     console.log(work)
//     $("#hour-11").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-11").html("11am")    
//     }, 2000);
//     localStorage.setItem("11amSlot", JSON.stringify(work));
//     // saveTasks(work)
// })


// $("#button-12").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-12").val()
//     console.log(work)
//     $("#hour-12").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-12").html("12pm")    
//     }, 2000);
//     localStorage.setItem("12pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })

// $("#button-13").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-13").val()
//     console.log(work)
//     $("#hour-13").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-13").html("1pm")    
//     }, 2000);
//     localStorage.setItem("1pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })


// $("#button-14").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-14").val()
//     console.log(work)
//     $("#hour-14").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-14").html("2pm")    
//     }, 2000);
//     localStorage.setItem("2pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })

// $("#button-15").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-15").val()
//     console.log(work)
//     $("#hour-15").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-15").html("3pm")    
//     }, 2000);
//     localStorage.setItem("3pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })

// $("#button-16").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-16").val()
//     console.log(work)
//     $("#hour-16").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-16").html("4pm")    
//     }, 2000);
//     localStorage.setItem("4pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })

// $("#button-17").on("click", function(){
//     //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
//     work=$("#text-17").val()
//     console.log(work)
//     $("#hour-17").html("<p class='text-success'>Saving Successful ✓</p>");
//     setTimeout(function() {
//     $("#hour-17").html("5pm")    
//     }, 2000);
//     localStorage.setItem("5pmSlot", JSON.stringify(work));
//     // saveTasks(work)
// })
for (var i = 9; i < 18; i++){
$("#text-"+i).val(localStorage.getItem("slot-"+i));
};

// $("#text-9").val(localStorage.getItem("slot-9"));
// $("#text-10").val(localStorage.getItem("slot-10"));
// $("#text-11").val(localStorage.getItem("slot-11"));
// $("#text-12").val(localStorage.getItem("slot-12"));
// $("#text-13").val(localStorage.getItem("slot-13"));
// $("#text-14").val(localStorage.getItem("slot-14"));
// $("#text-15").val(localStorage.getItem("slot-15"));
// $("#text-16").val(localStorage.getItem("slot-16"));
// $("#text-17").val(localStorage.getItem("slot-17"))