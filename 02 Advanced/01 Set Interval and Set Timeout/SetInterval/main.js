let body = document.querySelector("body");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

let backgroundChange
console.log(backgroundChange);
start.addEventListener("click", function () {
  function ChangeColor() {
    function randomcolour() {
      var randomNumber1 = Math.floor(Math.random() * 256);
      var randomNumber2 = Math.floor(Math.random() * 256);
      var randomNumber3 = Math.floor(Math.random() * 256);
      return (backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`);
    }
    body.style.backgroundColor = randomcolour();
    console.log(backgroundColor);
    console.log("hello world");
  }
   if (backgroundChange === undefined) {
    backgroundChange = setInterval(ChangeColor, 500);
   }
});

stop.addEventListener("click", function () {
  clearInterval(backgroundChange);
  backgroundChange = undefined;
});
