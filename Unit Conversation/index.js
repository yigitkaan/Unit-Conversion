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

//Click metodu ekle
btnEl.addEventListener("click", function () {
  let value = Number(inputEl.value);
  let txt = ``;

  for (let i = 0; i < resultsArr.length; i++) {
    if (i === 0) {
      txt = `${value} meters = ${value * meter} feet | ${value} feet = ${
        value / meter
      } meters`;
    } else if (i === 1) {
      txt = `${value} liters = ${value * liter} gallons | ${value} gallons = ${
        value / liter
      } liters`;
    } else {
      txt = `${value} kilos = ${value * kilogram} pounds | ${value} pounds = ${
        value / kilogram
      } kilos`;
    }

    resultsArr[i].textContent = txt;
  }
});
