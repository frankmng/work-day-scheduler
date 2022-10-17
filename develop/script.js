// setting variables to text areas
var textArea1 = $('#textarea1');
var textArea2 = $('#textarea2');
var textArea3 = $('#textarea3');
var textArea4 = $('#textarea4');
var textArea5 = $('#textarea5');
var textArea6 = $('#textarea6');
var textArea7 = $('#textarea7');
var textArea8 = $('#textarea8');
var textArea9 = $('#textarea9');

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

var array = [textArea1Value, textArea2Value, textArea3Value, textArea4Value, textArea5Value,
    textArea6Value, textArea7Value, textArea8Value, textArea9Value]

var array2 = [textArea1, textArea2, textArea3, textArea4, textArea5,
    textArea6, textArea7, textArea8, textArea9]
    
// display current day 
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

// hour of the day
var d = new Date();
var hour = d.getHours()

var d = new Date();
var n = d.toLocaleTimeString();


// setting timeblock background color to gray using jquery if hour has passed
for (i = 0; i < array.length; i++) {
    if (array[i] < hour){
        array2[i].css('background', '#b1b1b1');
    }
    else {
        array2[i].css('background', '#fff')
    }
}

