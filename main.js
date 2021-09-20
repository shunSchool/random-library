// Add Event Listener to Button
document.getElementById("calc-btn").addEventListener("click", buttonHandler);

function buttonHandler() {
  // Input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;
  // Output
  document.getElementById("output").innerHTML = sum(num1, num2);
}
//Functions

function area(a, b, h) {

}

function calculate() {
  //get inputs
  let num1 = +inputEl1.value;
  let num2 = +inputEl2.value;
  let num3 = +inputEl3.value;

  //calculate & output
  HTMLOutputElement.innerHTML = formulaFunction(num1, num2, num3);
}