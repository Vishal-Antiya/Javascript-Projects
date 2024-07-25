const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e);
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height == '' || height <= 0 || isNaN(height)) {
    result.textContent = 'Please give a valid height';
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    result.textContent = 'Please give a valid weight';
  } else if (18.6 > bmi) {
    // console.log("reached")
    result.innerText = `${bmi}: You are under weight`;
  } else if (18.6 < bmi && bmi < 24.9) {
    // console.log("reached")
    result.innerText = `${bmi}: You are normal weight`;
  } else if (bmi > 24.9) {
    // console.log("reached")
    result.innerText = `${bmi}: You are over weight`;
  }


});
