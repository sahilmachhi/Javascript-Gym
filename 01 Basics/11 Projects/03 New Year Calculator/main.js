const newYearDate = new Date("Jan 1, 2024");
let days = document.querySelector('.days');
let Hours = document.querySelector('.hour');
let Minutes = document.querySelector('.min');
let secs = document.querySelector('.sec');

function newYearCalculator() {
  let now = new Date();
  let newYear = new Date(newYearDate);

  let countdown = Math.floor((newYear - now) / 1000);
  let sec = countdown % 60;
  let min = Math.floor((countdown / 60) % 60);
  let hour = Math.floor((countdown / 3600) % 24);
  let day = Math.floor(countdown / (3600 * 24));

  days.innerText = addZero(day)
  Hours.innerText = addZero(hour)
  Minutes.innerText = addZero(min);
  secs.innerText = addZero(sec);


  function addZero(value){
    console.log(value);
    if(value < 10){
      value = `0${value}`
    }
    return value
  }
  
  if(day == 0 && hour == 0 && min == 0 && sec == 0){
    
  }

}

newYearCalculator();

let countdown = setInterval(newYearCalculator, 1000);
