import React, { createContext, useEffect, useState } from 'react';

import { updateLocation } from '../util/api';
import { defaultStart, processData } from '../util/data';
import aspects from '../constants/weatherAspects';

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [ forecastData, setForecastData ] = useState({});
  const [ graphData, setGraphData ] = useState([]);
  const [ locationData, setLocationData ] = useState(defaultStart);
  const [ weatherAspect, setWeatherAspect ] = useState(aspects.hourly);

  useEffect(async () => {
    const res = await updateLocation(weatherAspect.value, locationData);

    switch(weatherAspect.value) {
      case 'hourly':
      case 'windspeed':
        setForecastData({
          hourly: res,
        });
    }
    setGraphData(processData(weatherAspect.value, res));
  }, [locationData]);

  useEffect(() => {
    switch(weatherAspect.value) {
      case 'hourly':
      case 'windspeed':
        if (forecastData.hourly) {
          setGraphData(processData(weatherAspect.value, forecastData.hourly));
        }
    }
  }, [forecastData, weatherAspect]);

  return (
    <SessionContext.Provider
      value={{
        graphData,
        locationData,
        setLocationData,
        setWeatherAspect,
        weatherAspect,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
