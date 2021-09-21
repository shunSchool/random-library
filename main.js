// Add Event Listener to Button
document.getElementById("calc-btn").addEventListener("click", buttonHandler);

function buttonHandler() {
  // Input
  let aVal = +document.getElementById("a-in").value;
  let bVal = +document.getElementById("b-in").value;
  let hVal = +document.getElementById("h-in").value;
  // Output
  document.getElementById("output").innerHTML = (0.5 * aVal + bVal * hVal);
}
//Functions

function area(a, b, h) {
  return 0.5 * (a + b) * h;
}
