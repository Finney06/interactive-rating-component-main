var rateClasses = document.querySelectorAll(".rate")

for(let i = 0; i < rateClasses.length; i++) {
    rateClasses[i].addEventListener('click', function() {
        var selectedRate = i + 1;
        console.log(selectedRate);
        document.querySelector("#submit-button").addEventListener('click', nextDisplaySequence)
        document.querySelector("#displayRate").textContent = "You selected " + selectedRate + " out of 5";
    });
}

function nextDisplaySequence () {
   var currentDisplay = document.querySelector("#cardDisplay-1");
    var nextDisplay = document.querySelector("#cardDisplay-2");
   currentDisplay.style.display = "none";
   nextDisplay.style.display = "flex";

}