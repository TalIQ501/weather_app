import { IconPicker } from "./iconPicker";
import { determineColour } from "../functions/determineColour";

export const WeatherCard = async (dataManager, hour) => {       //Functionality currently limited to next 7 hours
    const currentWeather = await dataManager.conditionManager.getData(hour);
    const feelsLike = currentWeather.getFeelsLike();
    const currentDesc = currentWeather.getDesc();
    const currentIcon = currentWeather.getIcon();

    const iconImg = IconPicker(currentIcon);   

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const dataDisplay = document.createElement('div');
    dataDisplay.classList.add('data-display');
    
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time-display');
    timeDisplay.textContent = `${hour}:00`;

    dataDisplay.appendChild(timeDisplay);

    const feelsLikeStyle = determineColour(feelsLike);

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('temp-display', feelsLikeStyle);
    const scaleText = dataManager.conditionManager.getScale() ? "F" : "C";
    temperatureDisplay.textContent = Math.round(currentWeather.getTemp()) + `°${scaleText}`;
    
    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.textContent = currentDesc;
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
    weatherCardContainer.classList.add('weather-card-container');
    weatherCardContainer.appendChild(weatherCard)

    return weatherCardContainer;
}