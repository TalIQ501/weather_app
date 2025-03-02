export const MainWeatherDisplay = (weatherData, tempScale) => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('main-weather-display');

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('card-temp-disp');
    if (tempScale === 'f') temperatureDisplay.textContent = weatherData.getTempF();
    else temperatureDisplay.textContent = weatherData.getTempC();
    
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = weatherData.getConditions();
    descriptionDisplay.classList.add('weather-description');

    //const timeDisplay = document.createElement('div');

    weatherCard.appendChild(temperatureDisplay);
    weatherCard.appendChild(descriptionDisplay);

    return weatherCard;
}