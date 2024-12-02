const inputEl = document.getElementById("input-el");
const btnEl = document.querySelector(".btn-convert");
const resultsArr = [
  document.querySelector(".result.one"),
  document.querySelector(".result.two"),
  document.querySelector(".result.three"),
];

const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

btnEl.addEventListener("click", function () {
  let value = inputEl.value;
  let txt = ``;

  conversionCalculator(value);
});

inputEl.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    let value = inputEl.value;
    let txt = ``;

    conversionCalculator(value);
  }
});

function conversionCalculator(value) {
  if (!isNaN(value)) {
    for (let i = 0; i < resultsArr.length; i++) {
      if (i === 0) {
        txt = `${value} meters = ${(value * meter).toFixed(
          2
        )} feet | ${value} feet = ${(value / meter).toFixed(2)} meters`;
      } else if (i === 1) {
        txt = `${value} liters = ${(value * liter).toFixed(
          2
        )} gallons | ${value} gallons = ${(value / liter).toFixed(2)} liters`;
      } else {
        txt = `${value} kilos = ${(value * kilogram).toFixed(
          2
        )} pounds | ${value} pounds = ${(value / kilogram).toFixed(2)} kilos`;
      }

      resultsArr[i].textContent = txt;
    }
  } else {
    alert("Please enter a number!");
  }

  value = "";
  inputEl.value = value;
}
