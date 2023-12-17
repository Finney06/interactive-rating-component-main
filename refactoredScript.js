document.addEventListener('DOMContentLoaded', function () {
    var rateButtons = document.querySelectorAll(".rate");
  
    rateButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        var selectedRate = index + 1;
        console.log(selectedRate);
        document.querySelector("#submit-button").addEventListener('click', nextDisplaySequence);
        document.querySelector("#displayRate").textContent = "You selected " + selectedRate + " out of 5";
      });
    });
  
    function nextDisplaySequence() {
      var currentDisplay = document.querySelector("#cardDisplay-1");
      var nextDisplay = document.querySelector("#cardDisplay-2");
      currentDisplay.style.display = "none";
      nextDisplay.style.display = "flex";
    }
  });
  