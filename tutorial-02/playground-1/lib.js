var yearInput = document.getElementById("year-input");
var result = document.getElementById("result");
yearInput.onkeyup = function() {
  var years = parseInt(this.value);
  console.log(years);
  if (isNaN(years)) {
    result.innerHTML = "Please enter valid number of years.";
    return;
  }
  if (shouldGiveDiscount(years)) {
    result.innerHTML = "You are our valued member! We give you 15% discount on this purchase.";
  } else {
    result.innerHTML = "Sorry, we only give discount to members with membership of above 3 years old.";
  }
}