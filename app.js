thermostat = new Thermostat();

function displayTemp() {
  document.getElementById('display_temp').innerHTML = thermostat.getTemp();
  document.getElementById('display_temp').style.color = thermostat.getColour();
}

function buttonUp() {
  thermostat.upTemp();
  displayTemp();
}


function buttonDown() {
  thermostat.downTemp();
  displayTemp();
}

function buttonReset() {
  thermostat.resetTemp();
  displayTemp();
}
