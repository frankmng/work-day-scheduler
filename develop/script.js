// get textarea elements
var textArea1 = $('#textarea1');
var textArea2 = $('#textarea2');
var textArea3 = $('#textarea3');
var textArea4 = $('#textarea4');
var textArea5 = $('#textarea5');
var textArea6 = $('#textarea6');
var textArea7 = $('#textarea7');
var textArea8 = $('#textarea8');
var textArea9 = $('#textarea9');

// get form elements
var formEl1 = $('#events-form1');
var formEl2 = $('#events-form2');
var formEl3 = $('#events-form3');
var formEl4 = $('#events-form4');
var formEl5 = $('#events-form5');
var formEl6 = $('#events-form6');
var formEl7 = $('#events-form7');
var formEl8 = $('#events-form8');
var formEl9 = $('#events-form9');
var eventAlert = document.querySelector("#event-alert")

// toggle alert to none for now
eventAlert.style.display="none";

var textArea1Value = document.getElementById("textarea1").value
var textArea2Value = document.getElementById("textarea2").value
var textArea3Value = document.getElementById("textarea3").value
var textArea4Value = document.getElementById("textarea4").value
var textArea5Value = document.getElementById("textarea5").value
var textArea6Value = document.getElementById("textarea6").value
var textArea7Value = document.getElementById("textarea7").value
var textArea8Value = document.getElementById("textarea8").value
var textArea9Value = document.getElementById("textarea9").value

// setting value to hour of day
textArea1Value = 9;
textArea2Value = 10;
textArea3Value = 11;
textArea4Value = 12;
textArea5Value = 13;
textArea6Value = 14;
textArea7Value = 15;
textArea8Value = 16;
textArea9Value = 17;

var arrayValue = [textArea1Value, textArea2Value, textArea3Value, textArea4Value, textArea5Value,
    textArea6Value, textArea7Value, textArea8Value, textArea9Value]

var arrayArea = [textArea1, textArea2, textArea3, textArea4, textArea5,
    textArea6, textArea7, textArea8, textArea9]

    
// display current day 
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

// hour of the day
var d = new Date();
var hour = d.getHours()


// setting timeblock bg color based on past, present, and feature using jquery to set color if hour has passed
for (i = 0; i < arrayValue.length; i++) {
    if (arrayValue[i] < hour){
        arrayArea[i].css('background', '#b1b1b1');
    }
    else if (arrayValue[i] > hour){
        arrayArea[i].css('background', '#47d661');
    }
    else if (arrayValue[i] == hour){
        arrayArea[i].css('background', '#e8665d');
    }
}

// handle the event submission and save to storage
var handleEventSubmit = function (event) {
    event.preventDefault();    
    
    var textAreaSubmit1 = textArea1.val();
    var textAreaSubmit2 = textArea2.val();
    var textAreaSubmit3 = textArea3.val();
    var textAreaSubmit4 = textArea4.val();
    var textAreaSubmit5 = textArea5.val();
    var textAreaSubmit6 = textArea6.val();
    var textAreaSubmit7 = textArea7.val();
    var textAreaSubmit8 = textArea8.val();
    var textAreaSubmit9 = textArea9.val();

    localStorage.setItem("textAreaSubmit1", textAreaSubmit1);
    localStorage.setItem("textAreaSubmit2", textAreaSubmit2);
    localStorage.setItem("textAreaSubmit3", textAreaSubmit3);
    localStorage.setItem("textAreaSubmit4", textAreaSubmit4);
    localStorage.setItem("textAreaSubmit5", textAreaSubmit5);
    localStorage.setItem("textAreaSubmit6", textAreaSubmit6);
    localStorage.setItem("textAreaSubmit7", textAreaSubmit7);
    localStorage.setItem("textAreaSubmit8", textAreaSubmit8);
    localStorage.setItem("textAreaSubmit9", textAreaSubmit9);

    saveEvent(textAreaSubmit1)
    saveEvent(textAreaSubmit2)
    saveEvent(textAreaSubmit3)
    saveEvent(textAreaSubmit4)
    saveEvent(textAreaSubmit5)
    saveEvent(textAreaSubmit6)
    saveEvent(textAreaSubmit7)
    saveEvent(textAreaSubmit8)
    saveEvent(textAreaSubmit9)
    
    // alert when event has been saved to local storage
    eventAlert.style.display="block";


    // eventAlert.append("Appointment added to <span>localStorage </span>")
    // if (eventAlert) {

    // }
}

// handle the saved event to populate the timeblock
var saveEvent = function (event) {
    var event1 = localStorage.getItem(event);
    var event2 = localStorage.getItem(event);
    var event3 = localStorage.getItem(event);
    var event4 = localStorage.getItem(event);
    var event5 = localStorage.getItem(event);
    var event6 = localStorage.getItem(event);
    var event7 = localStorage.getItem(event);
    var event8 = localStorage.getItem(event);
    var event9 = localStorage.getItem(event);

    textArea1.textContent = event1;
    textArea2.textContent = event2;
    textArea3.textContent = event3;
    textArea4.textContent = event4;
    textArea5.textContent = event5;
    textArea6.textContent = event6;
    textArea7.textContent = event7;
    textArea8.textContent = event8;
    textArea9.textContent = event9;
  };

// handle the submit button on each timeblock
formEl1.on('submit', handleEventSubmit);
formEl2.on('submit', handleEventSubmit);
formEl3.on('submit', handleEventSubmit);
formEl4.on('submit', handleEventSubmit);
formEl5.on('submit', handleEventSubmit);
formEl6.on('submit', handleEventSubmit);
formEl7.on('submit', handleEventSubmit);
formEl8.on('submit', handleEventSubmit);
formEl9.on('submit', handleEventSubmit);