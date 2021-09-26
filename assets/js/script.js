// Getting today's date for the header
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

// hour generates the number of the current hour
var hour = new Date().getHours()
console.log("We are currently in the following hour: " +hour)
// This is a hA to see if we match the text of the box
var actualHour = moment().format("hA");
//when actualHour and spell match they will be green!
console.log("The current time with am or pm is: " +actualHour)

//Current time helps locate which classes to give to colours too
var currentTime = document.getElementById("hour-"+hour)

//I encountered a bug where getElementbyId and text.content would fail if there was no id on html. I didn't want to change it back to queryselector so I 
// used stop bug to keep hour as a string so it would keep a condition check working on line 25. This assigment works during 9-5 though! 😃
if (hour > 17) {currentTime="Stop Bug"}

console.log("The current time of " +currentTime.textContent+ " will be red")

// This for loop will make the current time red if applicable, times that haven't occurred will be green and past events in grey.
for (var i = 9; i < 18; i++){ 
if (currentTime.textContent === actualHour) {
$("#text-"+hour).addClass("present")
}; 
if (i > hour) {
$("#text-"+i).addClass("future")
} else {
    $("#text-"+i).addClass("past")    
}}

// // I spent some time trying to build an array to store all id's and data entries but ran out of time. I did get some other code cleaned up and sped up a bit.
// var count = []
// for (var i = 9; i < 18; i++){
//     count.push({
//     id: "hour-"+ i,
//     text: "text-" +i,
//     button: "button-" +i,
//     textArea: " "});
// };
console.log(count)
// each save button will target it's sibling .description and save it's textarea and post a display message for 2seconds
$(".saveBtn").on("click", function(){
    var slotNumber = $(this).parent().attr("id");
    var textArea = $(this).siblings(".description").val();
    $(this).before("<p class='text-success'>Saving Successful ✓</p>");
        setTimeout(function() {
        $("p").html("")    
        }, 2000);
    localStorage.setItem(slotNumber, textArea);
    });
// Old code that was the long form of each button click. I was able to work out a quicker way.
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
// buttons 10 - 16

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

// I was able to build a clean function to store data.
var loadTasks =function(){}
for (var i = 9; i < 18; i++){
$("#text-"+i).val(localStorage.getItem("slot-"+i));
};
loadTasks()

// $("#text-9").val(localStorage.getItem("slot-9"));
// $("#text-10").val(localStorage.getItem("slot-10"));
// $("#text-11").val(localStorage.getItem("slot-11"));
// $("#text-12").val(localStorage.getItem("slot-12"));
// $("#text-13").val(localStorage.getItem("slot-13"));
// $("#text-14").val(localStorage.getItem("slot-14"));
// $("#text-15").val(localStorage.getItem("slot-15"));
// $("#text-16").val(localStorage.getItem("slot-16"));
// $("#text-17").val(localStorage.getItem("slot-17"))