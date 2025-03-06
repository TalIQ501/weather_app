export const WeatherCard = (city, country, timeConditions, tempScale) => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('card-temp-disp');

    const locationName = document.createElement('div');
    locationName.classList.add('location-name');
    locationName.textContent = `${city},${country}`;

    if (tempScale === true) temperatureDisplay.textContent = timeConditions.getTempF()  + '°F';
    else temperatureDisplay.textContent = timeConditions.getTempC() + '°C';
    
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = timeConditions.getConditions();
    descriptionDisplay.classList.add('weather-description');

    weatherCard.appendChild(temperatureDisplay);
    weatherCard.appendChild(descriptionDisplay);

    return weatherCard;
}