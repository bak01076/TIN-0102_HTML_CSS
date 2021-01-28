import React, { useState } from "react";
import Input from "../Components/Input";

const DistanceConverter = () => {
  const [distance, setDistance] = useState({ k: 0, m: 0 });

  const updateKilometer = (value) => {
    setDistance({
      k: value,
      m: (+value / 1.609).toFixed(2),
    });
  };
  const updateMiles = (value) => {
    setDistance({
      k: (+value * 1.609).toFixed(2),
      m: value,
    });
  };
  return (
    <div>
      <Input
        value={distance.k}
        caption="Kilometers"
        onChange={updateKilometer}
      />

      <Input value={distance.m} caption="Miles" onChange={updateMiles} />
    </div>
  );
};

export default DistanceConverter;
