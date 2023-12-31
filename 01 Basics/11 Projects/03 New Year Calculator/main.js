const newYearDate = new Date("Jan 1, 2024");
let days = document.querySelector(".days");
let Hours = document.querySelector(".hour");
let Minutes = document.querySelector(".min");
let secs = document.querySelector(".sec");
let h1 = document.querySelector("h1");

function newYearCalculator() {
  let now = new Date();
  let newYear = new Date(newYearDate);

  let countdown = Math.floor((newYear - now) / 1000);
  let sec = countdown % 60;
  let min = Math.floor((countdown / 60) % 60);
  let hour = Math.floor((countdown / 3600) % 24);
  let day = Math.floor(countdown / (3600 * 24));

  days.innerText = addZero(day);
  Hours.innerText = addZero(hour);
  Minutes.innerText = addZero(min);
  secs.innerText = addZero(sec);

  function addZero(value) {
    console.log(value);
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  }

  if (day == 0 && hour == 0 && min == 0 && sec == 0) {
    clearInterval(countdownYear);
    console.log("countdown stopped");
    h1.innerText = "Happy New Year🎉🎊✨";
    h1.classList.toggle("glow");
    h1.classList.toggle("h1");
    celebrate()
  }
}

newYearCalculator();

let countdownYear = setInterval(newYearCalculator, 1000);

function celebrate() {
  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}

