//const q12Select = document.querySelector("business-expenses");
//console.log("hello");
//const q12Input = document.getElementById("q12")

//q12Select.addEventListener("change", function() {
 // if (q12Select.value === "yes") {
   // q12Input.value = "10";
 // } else {
    //alert ("contractor");
// shoudl i change to click  or should i have this as change?
const calculateButton = document.getElementById("calculate-button");

  calculateButton.addEventListener("click", function() {
    // Get the score inputs
    const scoreInputs = document.querySelectorAll(".score-input");

    let totalScore = 0;

    // Calculate the total score
    scoreInputs.forEach(function(input) {
      totalScore += parseInt(input.value);
    });

    // Display the result
    alert("Total Score: " + totalScore);