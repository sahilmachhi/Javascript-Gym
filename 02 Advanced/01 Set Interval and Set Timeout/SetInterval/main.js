let body = document.querySelector("body");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

// let backgroundChange
// console.log(backgroundChange);
// start.addEventListener("click", function () {
//   function ChangeColor() {
//     function randomcolour() {
//       var randomNumber1 = Math.floor(Math.random() * 256);
//       var randomNumber2 = Math.floor(Math.random() * 256);
//       var randomNumber3 = Math.floor(Math.random() * 256);
//       return (backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`);
//     }
//     body.style.backgroundColor = randomcolour();
//     console.log(backgroundColor);
//     console.log("hello world");
//   }
//    if (backgroundChange === undefined) {
//     backgroundChange = setInterval(ChangeColor, 500);
//    }
// });

// stop.addEventListener("click", function () {
//   clearInterval(backgroundChange);
//   backgroundChange = undefined;
// });

let backgroundChange;

start.addEventListener("click", () => {
  if (!backgroundChange) {
    backgroundChange = setInterval(() => {
      const randomColor1 = `rgba(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )}, ${Math.random()})`;

      const randomColor2 = `rgba(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )}, ${Math.random()})`;

      const randomColor3 = `rgba(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )}, ${Math.random()})`;

      let minDifference = 20;

      let randomPosition1 = Math.floor(Math.random() * (minDifference + 1));
      let randomPosition2 =
        Math.floor(Math.random() * (randomPosition1 - minDifference + 1)) +
        randomPosition1 +
        minDifference;
      let randomPosition3 =
        Math.floor(Math.random() * (randomPosition2 - minDifference + 1)) +
        randomPosition2 +
        minDifference;

      const linearGradient = `linear-gradient(
          ${Math.floor(Math.random() * 361)}deg,
          ${randomColor1} ${randomPosition1}%,
          ${randomColor2} ${randomPosition2}%,
          ${randomColor3} ${randomPosition3}%
      )`;

      body.style.background = linearGradient;
      console.log(linearGradient);
    }, 3000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(backgroundChange);
  backgroundChange = undefined;
});
