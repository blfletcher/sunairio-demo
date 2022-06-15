export const defaultStart = {
  lat: 39.2904,
  lng: -76.6122,
};

export function processData(aspect, data) {
  switch(aspect) {
    case 'hourly':
      return data.map((n) => {
        return {
          x: n.startTime,
          y: n.temperature,
        };
      });
    case 'windspeed':
      return data.map((n) => {
        return {
          x: n.startTime,
          y: parseInt(n.windSpeed.replaceAll(' mph', '')) || 0,
        };
      });
  }

  return [];
}