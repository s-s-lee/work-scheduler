//display today's date using Moment.js
var now = moment();
var currentDay = $("#currentDay");
currentDay.text(now.format("dddd, MMMM Do"));

// timeblocks for standard business hours
var timeBlocks = [
    {
        id: "1",
        hour: "8",
        time: "08",
        timeOfDay: "am",
        notes: ""
    },
    {
        id: "2",
        hour: "9",
        time: "09",
        timeOfDay: "am",
        notes: ""
    },
    {
        id: "3",
        hour: "10",
        time: "10",
        timeOfDay: "am",
        notes: ""
    },
    {
        id: "4",
        hour: "11",
        time: "11",
        timeOfDay: "am",
        notes: ""
    },
    {
        id: "5",
        hour: "12",
        time: "12",
        timeOfDay: "pm",
        notes: ""
    },
    {
        id: "6",
        hour: "1",
        time: "13",
        timeOfDay: "pm",
        notes: ""
    },
    {
        id: "7",
        hour: "2",
        time: "14",
        timeOfDay: "pm",
        notes: ""
    },
    {
        id: "8",
        hour: "3",
        time: "15",
        timeOfDay: "pm",
        notes: ""
    },
    {
        id: "9",
        hour: "4",
        time: "16",
        timeOfDay: "pm",
        notes: ""
    },
    {
        id: "10",
        hour: "5",
        time: "17",
        timeOfDay: "pm",
        notes: ""
    },
]

// getting current time
var currentHour = now.format("H");

// creating scheduler itself
timeBlocks.forEach(function(currentHour) {
    // creating each hour's row
    var timeRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);
    // hour column
    var hourText = $("<div>")
        .text(`${currentHour.hour}${currentHour.timeOfDay}`)
        .attr({
            "class": "col-md-2 hour"
        });
    // appointment or meeting description
    var hourDescription = $("<div>")
        .attr({
            "class": "col-md-8 description"
        });
    var planText = $("<textarea>");    
    planText.attr("id", currentHour.id);
    hourDescription.append(planText);
    // if/else to color code each timeblock
    if (currentHour.time < moment().format("HH")) {
        planText.attr ({
            "class": "past",
        })
    }   else if (currentHour.time === moment().format("HH")) {
            planText.attr({
                "class": "present"
            })
    }   else if (currentHour.time > moment().format("HH")) {
            planText.attr({
                "class": "future"
            })
    }
    // creating save button element
    var saveButton = $("<i class='fa fa-save'></i>")
    var saveEvent = $("<button>")
    .attr({
        "class": "col-md-2 saveBtn"
    });
    // appending content
    saveEvent.append(saveButton);
    timeRow.append(hourText, hourDescription, saveEvent);
});

// save button to save text
// $("#saveBtn").submit(function(){
//     event.preventDefault();
//     localStorage.setItem(timeBlocks.notes);
//     console.log(timeBlocks.notes);
// })
// function saveBtn() {
//     localStorage.setItem(timeBlocks.notes);
//     console.log(timeBlocks.notes);
// }

// text is stored as a JSON string
// function saveNotes() {
//     $(".saveBtn").on("click", function(event) {
//         event.preventDefault();
//         // localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
//     })
// }

// displays any data that's been saved to localStorage
function init() {
    // if (savedDay !== null) {
    //     timeBlocks = savedDay;
    // }
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
    })
    // store data as JSON
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
    
    var savedDay = localStorage.getItem("timeBlocks");
    console.log("savedDay: ", JSON.parse(savedDay));

    // var savedNotes = JSON.parse(savedDay);
    // console.log(savedNotes);

}


// var savedDay = JSON.parse(localStorage.getItem("timeBlocks"));

// function init() {
//     if (savedDay !== null) {
//         timeBlocks = savedDay;
//     }
//     // runs the functions to save and display saved text
//     console.log(saveNotes);
//     saveNotes();
//     console.log(showNotes);
//     showNotes();
// }

init();

// display stored text
// function showNotes() {
//     timeBlocks.forEach(function(currentHour) {
//         $(`#${currentHour.id}`).val(currentHour.notes);
//     })
// }

// event listener for clicking the save button    
// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     // shows message that saving to localStorage was successful
//     $('#confirm').fadeIn();
//     setTimeout(function(){
//         $('#confirm').html("Appointment added to localStorage ✔️").fadeToggle(function() {
//             $('#confirmDone').fadeToggle(0);
//         });
//     });
// });