const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const H = parseInt(document.querySelector("#Height-cm").value);
  const W = parseInt(document.querySelector("#Weight-KG").value);

  const resultText = document.querySelector(".result-text");
  if (H === " " || H < 0 || isNaN(H)) {
    resultText.innerHTML = `please give valid input ${H}`;
  } else if (W === " " || W < 0 || isNaN(W)) {
    resultText.innerHTML = `please give valid input ${W}`;
  } else {
    const result = (W / ((H * H) / 10000)).toFixed(2);
    if (result < 18.6) {
      resultText.innerHTML = `You are UnderWeight your BMI is ${result}`;
      console.log(result);
    } else if (18.6 < result < 24.9) {
      resultText.innerHTML = `Your Weight is normal, Your BMI is ${result}`;
      console.log(result);
    } else if (result > 24.9) {
      resultText.innerHTML = `You are OverWeight your BMI is ${result}`;
      console.log(result);
    }
  }
});
