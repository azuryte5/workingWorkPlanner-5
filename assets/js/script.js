
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

// If there is time. I want to Assign all the id's from this array with each section
//change to section? add to div

//each?
//find?
//trim?
//attr? change and over

// hour generates the number of the current hour
var hour = new Date().getHours()
console.log("We are currently in the following hour: " +hour)
// This is a hA to see if we match the text of the box
var actualHour = moment().format("hA");
//when actualHour and spell match they will be green!
console.log("The current time with am or pm is: " +actualHour)

//Current time helps locate which classes to give to colours too
var currentTime = document.getElementById("hour-"+hour)

if (hour > 17) {currentTime="Stop Bug"}

console.log("The current time of " +currentTime.textContent+ " will be red")

// This for loop will make the current time red if applicable, times that haven't occured in green and past events in grey.
for (var i = 9; i < 18; i++){ 
if (currentTime.textContent === actualHour) {
$("#text-"+hour).addClass("present")
}; 
if (i > hour) {
$("#text-"+i).addClass("future")
} else {
    $("#text-"+i).addClass("past")    
}}

// If i have time I'm trying to build all id's in a count array 
var count = []
for (var i = 9; i < 18; i++){
    count.push({
    id: "hour-"+ i,
    text: "text-" +i,
    button: "button-" +i,
    textArea: " "});


};
console.log(count)
// each save button will target it's sibiling .description and save it's textarea and post a display message for 2seconds
$(".saveBtn").on("click", function(){
    var slotNumber = $(this).parent().attr("id");
    var textArea = $(this).siblings(".description").val();
    $(this).before("<p class='text-success'>Saving Successful ✓</p>");
        setTimeout(function() {
        $("p").html("")    
        }, 2000);
    localStorage.setItem(slotNumber, textArea);
    });

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