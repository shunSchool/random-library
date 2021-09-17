// Add Event Listener to Button
document.getElementById("calc-btn").addEventListener("click", buttonHandler);

function buttonHandler() {
  // Input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;
  let num4 = +document.getElementById("num4-in").value;
  // Output
  document.getElementById("output").innerHTML = sum(num1, num2);
}
//deez nuts
function Distance(x1, y1, x2, y2) {
  return a + b;
}