//Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide result
  document.getElementById("results").style.display = "none";
  //Show Loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  //2sec = 2000 milliseconds
  e.preventDefault();
});

//Calculate Results
function calculateResults() {
  console.log("Calculating...");
  //UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementsById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(year.value) * 12;

  //Compute monthly Payment
  const x = Math.pow(1 + calculatePayments).toFixed(2);
  //toFixed is a fun in js for precision of decimal values, above will have two values after decimal.
  //the function of pow is same as the c/c++
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatePayments - principal).toFixed(2);

    //Show result
    document.getElementById("results").style.display = "block";
    //Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
  //isFinite checks whether all the values are favourable to calculate the monthly and if we leave the input as blank in the form it will return false
}

//Show Error
function showError(error) {
  //Hide results
  document.getElementById("results").style.display = "none";
  //Hide Loader
  document.getElementById("loading").style.display = "none";

  //create a div
  const errorDiv = document.createElement("div");

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelectorAll(".heading");

  //Add class
  errorDiv.className = "alert alert-danger";

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);
  //insertBefore is a fun in js that take two parameter

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);
  //3000 millisecond
  //it will call the clearError fun after 3 sec of the above all process of showError() fun.
}

//clear error fun
function clearError() {
  document.querySelector(".alert").remove(); //we selected the div with id alert and remove it
}
