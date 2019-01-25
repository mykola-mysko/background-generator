var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var myButton = document.querySelector('.myButton')

css.textContent = `linear-gradient(to right ${color1.value} ${color2.value});`

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ")";

  css.textContent = body.style.background + ";";
}

function generateRandomGradient() {
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }



  color1.value = getRandomRgb()
  color2.value = getRandomRgb()

  setGradient()
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

myButton.addEventListener('click', generateRandomGradient)