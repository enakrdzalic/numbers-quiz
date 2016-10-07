var number;
var maxInt = 1000000;
var spokenNumber;
var rate = 0.7;

function setRandomInt() {
    number = Math.floor(Math.random() * maxInt);
}

function speak() {
    speechSynthesis.speak(spokenNumber);
}

function slower() {
    rate = (rate - 0.1) >= 0.5 ? rate - 0.1 : rate;
    spokenNumber.rate = rate;
}

function faster() {
    rate = (rate + 0.1) <= 2 ? rate + 0.1 : rate;
    spokenNumber.rate = rate;
}

function checkAnswer() {
    var attempt = document.getElementById("attempt").value;
    var response = (attempt == number ? "Correct!" : "Sorry, that is incorrect. The right answer is " + number + ".");
    document.getElementById("answer").innerHTML = response;
}

function newNumber() {
    document.getElementById("attempt").value = "";
    document.getElementById("answer").innerHTML = "";
    setRandomInt();
    spokenNumber.text = number;
    speak();
}

function init() {
    setRandomInt();
    spokenNumber = new SpeechSynthesisUtterance();
    spokenNumber.lang = 'ko';
    spokenNumber.text = number;
    spokenNumber.rate = rate;
    spokenNumber.volume = 1; // 0 to 1
    speak();
}

init();