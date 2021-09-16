
document.addEventListener("click", runCode);

function runCode() {
    let h1E1 = document.getElementById("output");

  h1E1.innerHTML = randomInt(50, 90)
  h1E1.style.color = randomRGB();
}
