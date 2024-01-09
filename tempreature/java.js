window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    const resultArea = document.getElementById("resultArea");
  
    convertBtn.addEventListener("click", function() {
      const temperatureInput = document.getElementById("temperatureInput").value;
      const unitFromSelect = document.getElementById("unitFromSelect").value;
      const unitToSelect = document.getElementById("unitToSelect").value;
  
      if (temperatureInput === "" || isNaN(temperatureInput)) {
        resultArea.innerText = "Invalid input";
      } else {
        let convertedTemperature;
        let convertedUnit;
  
        if (unitFromSelect === unitToSelect) {
          convertedTemperature = parseFloat(temperatureInput);
          convertedUnit = unitFromSelect.charAt(0).toUpperCase() + unitFromSelect.slice(1);
        } else if (unitFromSelect === "celsius") {
          if (unitToSelect === "fahrenheit") {
            convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
            convertedUnit = "Fahrenheit";
          } else if (unitToSelect === "kelvin") {
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            convertedUnit = "Kelvin";
          }
        } else if (unitFromSelect === "fahrenheit") {
          if (unitToSelect === "celsius") {
            convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
            convertedUnit = "Celsius";
          } else if (unitToSelect === "kelvin") {
            convertedTemperature = ((parseFloat(temperatureInput) - 32) * 5/9) + 273.15;
            convertedUnit = "Kelvin";
          }
        } else if (unitFromSelect === "kelvin") {
          if (unitToSelect === "celsius") {
            convertedTemperature = parseFloat(temperatureInput) - 273.15;
            convertedUnit = "Celsius";
          } else if (unitToSelect === "fahrenheit") {
            convertedTemperature = ((parseFloat(temperatureInput) - 273.15) * 9/5) + 32;
            convertedUnit = "Fahrenheit";
          }
        }
  
        resultArea.innerText = Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit};
      }
    });
  };