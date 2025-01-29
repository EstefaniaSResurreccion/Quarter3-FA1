var fn = prompt("Input your first name: ");
var ln = prompt("Input your last name: ");
var by = prompt(" Input your birth year: ");
var yr = 2025;
var age = yr-by;

var op = "Hello " + fn +" " + ln + "!" + " How does it feel to be " + age + " years old?";
document.getElementById("result").innerText = op