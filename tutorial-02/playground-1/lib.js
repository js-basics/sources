// Don't modify this file. You are only allowed to modify 'main.js'.
var yearInput = document.getElementById("year-input");
var result = document.getElementById("result");
var ITEM_PRICE = 273.44;  // in dollars.
yearInput.onkeyup = function() {
  var years = parseInt(this.value);
  console.log(years);
  if (isNaN(years)) {
    result.innerHTML = "Please enter valid number of years.";
    return;
  }
  var discount = calculateMemberDiscount(years);
  if (discount > 0) {
    result.innerHTML = "<p>You are our valued member! We are giving you " + discount + "% discount on this purchase.</p>";
  } else {
    result.innerHTML = "<p>Sorry, we do not give any discount to non-members.</p>";
  }
  var finalPrice = ((100 - discount) / 100 * ITEM_PRICE).toFixed(2);
  result.innerHTML += "<p>Final price: $" + finalPrice + "</p>";
}