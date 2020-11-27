function convertTemperature() {
  let input = document.getElementById("tempretureInput").value;
  input = parseFloat(input);
  if (!input) {
    document.getElementById("result").innerHTML = "please enter the number";
    return;
  }
  let option = document.querySelector('input[name="Tempreture Option"]:checked')
    .value;
  if (option === "Celsius") {
    document.getElementById("result").innerHTML = `${Math.floor(
      (input * 9) / 5 + 32
    )} ℉`;
  } else {
    document.getElementById("result").innerHTML = `${Math.floor(
      (input - 32) / 1.8
    )} ℃`;
  }
}
