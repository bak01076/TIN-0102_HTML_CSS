import React, { useState } from "react";
import Input from "../Components/Input";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({ c: 0, f: 32.0, k: 273.15 });

  const updateCelcius = (value) => {
    setTemperature({
      c: value,
      f: ((+value * 9) / 5 + 32).toFixed(2),
      k: (+value + 273.15).toFixed(2),
    });
  };
  const updateFarenheit = (value) => {
    setTemperature({
      c: (((+value - 32) * 5) / 9).toFixed(2),
      f: value,
      k: (((+value - 32) * 5) / 9 + 273.15).toFixed(2),
    });
  };

  const updateKelvin = (value) => {
    setTemperature({
      c: (+value - 273.15).toFixed(2),
      f: (((+value - 273.15) * 9) / 5 + 32).toFixed(2),
      k: value,
    });
  };

  return (
    <div>
      <Input value={temperature.c} caption="Celsius" onChange={updateCelcius} />
      <Input
        value={temperature.f}
        caption="Fahrenheit"
        onChange={updateFarenheit}
      />

      <Input value={temperature.k} caption="Kelvin" onChange={updateKelvin} />
    </div>
  );
};

export default TemperatureConverter;
