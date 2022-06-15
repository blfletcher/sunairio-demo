const baseURL = 'https://api.weather.gov';

async function getZone(location) {
  const res = await fetch(`${baseURL}/points/${location.lat},${location.lng}`);

  return res.json();
}

function getAspectURL(aspect, prop) {
  switch(aspect) {
    case 'hourly':
      return prop.forecastHourly;
    case 'windspeed':
      return prop.forecastHourly;
  }
}

export async function updateLocation(aspect, location) {
  return getZone(location)
  .then(data => {
    if (data && data.properties) {
      if (data.properties.gridId) {
        location.gridId = data.properties.gridId;
      }
      if (data.properties.gridX) {
        location.gridX = data.properties.gridX;
      }
      if (data.properties.gridY) {
        location.gridY = data.properties.gridY;
      }
      if (data.properties.gridId &&
        data.properties.gridX &&
        data.properties.gridY) {
          location.gridLoc = `${data.properties.gridId}/${data.properties.gridX},${data.properties.gridY}`;
      }
    }
    return fetch(getAspectURL(aspect, data.properties))
      .then(data => data.json())
      .then(data => {
        if (data && data.properties && data.properties.periods) {
          return data.properties.periods;
        }
        return [];
      });
  });
}