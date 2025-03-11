export const MainWeatherDisplay = async (dataManager) => {
    const currentWeather = await dataManager.conditionManager.getData('current');
    const dayDesc = dataManager.conditionManager.getDayDesc();

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-display');

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('card-temp-disp');
    const scaleText = dataManager.conditionManager.getScale() ? "F" : "C";
    temperatureDisplay.textContent = Math.round(currentWeather.getTemp()) + `°${scaleText}`;
    //if (tempScale === true) temperatureDisplay.textContent = weatherData.getTempF();
    //else temperatureDisplay.textContent = weatherData.getTempC();
    
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = dayDesc;
    descriptionDisplay.classList.add('weather-description');

    //const timeDisplay = document.createElement('div');

    weatherCard.appendChild(temperatureDisplay);
    weatherCard.appendChild(descriptionDisplay);

    return weatherCard;
}