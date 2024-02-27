/*
    Dezerae Brawner
    6-2-22
    Event Driven Programming - Buttons

*/

var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// the start timer function

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
        }
    if (tens > 9) {
        appendTens.innerHTML = tens;
        }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
        }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
        }
    }

    buttonStart.onclick = function () { // inputs button to start timer
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () { // inputs button to stop timer
        clearInterval(interval);
    }

    buttonReset.onclick = function () { // inputs button to reset timer back to 0
        clearInterval(interval); // this clears the timer
        tens = "00";
        seconds = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }