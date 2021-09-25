var work=$("#hour-9").val();
// Old time is greyed out
// current time is red
// future time is green
//icon for save button
//center header

//today

var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").append(currentDay);

var actualHour = moment().format("hA");
console.log(actualHour)

// day = new Date()
// var hour = day.getHours()
// console.log(hour)

//plannerArray = [ 9,10,11 ,12 ,13 ,14 ,15,16.17 ]
// console.log(plannerArray)

// console.log(plannerArray[7]===hour)

// if (plannerArray[0]===hour) {
// $("hour-"+plannerArray[0]).addClass("present")
// }

// //this works? wow.
// var hourlyTimer = function (hour) {
// // var everyHour = setInterval(function() {

// plannerArray = [ 9,10,11 ,12 ,13 ,14 ,15,16];
// var hour = day.getHours();   

// for (var i=0; i > plannerArray.length; i++){
// if (plannerArray[i]===hour) {
//     $("#hour-"+ plannerArray[i]).addClass("present")
//     console.log(i)
//     return hour};
// if (i>plannerArray.length) {
// }
// //)
// };
// }
// var time =hourlyTimer(hour).value
// console.log(time)
// // }
// // var everyHour =function(){setInterval(hourlyTimer(),5000)};
// everyHour()
      // Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
    //   // If there is nothing in 'localStorage', sets the 'list' to an empty array
    //   var list = JSON.parse(localStorage.getItem('hour')) || [];

    //   // Renders our to-dos to the page
    //   function renderTodos(list) {
    //     // Empties out the html
    //     $('#to-dos').empty();

    //     // Iterates over the 'list'
    //     for (var i = 0; i < list.length; i++) {
    //       // Creates a new variable 'toDoItem' that will hold a "<p>" tag
    //       // Sets the `list` item's value as text of this <p> element
    //       var toDoItem = $('<p>');
    //       toDoItem.text(list[i]);

    //       // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
    //       var toDoClose = $('<button>');
    //       toDoClose.attr('data-to-do', i);

    //       // Gives the button a class called 'checkbox'
    //       toDoClose.addClass('checkbox');

    //       // Adds a checkmark symbol as its text value
    //       toDoClose.text('✓');

    //       // Adds the button to the `toDoItem`
    //       toDoItem = toDoItem.prepend(toDoClose);

    //       // Adds 'toDoItem' to the To-Do List div
    //       $('#to-dos').append(toDoItem);
    //     }
    //   }
// $("hour-9").storeText(function() {
// var value = $( this ).val();
// console.log(value);
// })
// .storeText();
var spell = document.getElementById("hour-9").value
console.log(spell)
// This two give the same result
var declare = $("#hour-9").val()
console.log(declare)
//save button works

//CAN I BUILD AN ARRAY FOR ALL OF THIS?
$("#button-9").on("click", function(){
    //Work makes it store the text input of the log entry. finally. val kinda uses the textcontent
    work=$("#hour-9").val()
    console.log(work)
    $("#hour").html("<p class='text-success'>Saving Successful</p>");
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