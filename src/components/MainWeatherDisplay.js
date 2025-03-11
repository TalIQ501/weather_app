import { IconPicker } from "./iconPicker";
import commonStyles from './WeatherCardCommon.module.css';

export const MainWeatherDisplay = async (dataManager) => {
    console.log(commonStyles);
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
    timeDisplay.textContent = `${time.getHours()}:${time.getMinutes()}`;

    dataDisplay.appendChild(locationDisplay);
    dataDisplay.appendChild(timeDisplay);

    //const feelsLikeStyle = feelsLikeDetermine(feelsLike);

    const temperatureDisplay = document.createElement('div');
    temperatureDisplay.classList.add('temp-display');
    temperatureDisplay.className(commonStyles.tempScorch)
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

    //const timeDisplay = document.createElement('div');

    weatherCard.appendChild(dataDisplay);
    weatherCard.appendChild(weatherIconContainer);
    weatherCard.appendChild(temperatureDisplay);
    weatherCard.appendChild(descriptionDisplay);
    
    const weatherCardContainer = document.createElement('div');
    weatherCardContainer.classList.add('main-weather-display-container');
    weatherCardContainer.appendChild(weatherCard)

    return weatherCardContainer;
}

/*
const feelsLikeDetermine = (temp) => {
    switch (true) {
        case temp > 100:
            return 'temp-scorch';
        case temp > 90:
            return 'temp-hot';
        case temp > 80:
            return 'temp-warm';
        case temp > 70:
            return '';
        case temp > 60:
            return 'temp-cool';
        case temp > 50:
            return 'temp-cold';
        default:
            return 'temp-freeze';
    }
}
*/