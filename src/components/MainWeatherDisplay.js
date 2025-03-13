import { IconPicker } from "./iconPicker";
import { determineColour } from "../functions/determineColour";

export const MainWeatherDisplay = async (dataManager) => {
    const currentWeather = await dataManager.conditionManager.getData('current');
    const dayDesc = dataManager.conditionManager.getDayDesc();
    const feelsLike = currentWeather.getFeelsLike();
    const currentDesc = currentWeather.getDesc();
    const currentIcon = currentWeather.getIcon();
    const time = dataManager.conditionManager.getLastRetrieved();

    const iconImg = IconPicker(currentIcon);   

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('main-weather-display');

    const dataDisplay = document.createElement('div');
    dataDisplay.classList.add('data-display');

    const locationDisplay = document.createElement('div');
    locationDisplay.classList.add('location-display');
    locationDisplay.textContent = `${dataManager.getCity()}, ${dataManager.getCountry()}`;
    
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time-display');
    timeDisplay.textContent = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`;

    dataDisplay.appendChild(locationDisplay);
    dataDisplay.appendChild(timeDisplay);

    const feelsLikeStyle = determineColour(feelsLike);

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('temp-display', feelsLikeStyle);
    const scaleText = dataManager.conditionManager.getScale() ? "F" : "C";
    temperatureDisplay.textContent = Math.round(currentWeather.getTemp()) + `°${scaleText}`;
    
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = dayDesc;
    descriptionDisplay.classList.add('day-weather-desc');

    const weatherIconContainer = document.createElement('div');
    weatherIconContainer.classList.add('img-container');

    const weatherIconImg = document.createElement('img');
    weatherIconImg.src = iconImg;
    weatherIconImg.alt = currentDesc;

    weatherIconContainer.appendChild(weatherIconImg);

    weatherCard.appendChild(dataDisplay);
    weatherCard.appendChild(weatherIconContainer);
    weatherCard.appendChild(temperatureDisplay);
    weatherCard.appendChild(descriptionDisplay);
    
    const weatherCardContainer = document.createElement('div');
    weatherCardContainer.classList.add('main-weather-display-container');
    weatherCardContainer.appendChild(weatherCard)

    return weatherCardContainer;
}