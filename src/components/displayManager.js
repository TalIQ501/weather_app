import { MainWeatherDisplay } from "./MainWeatherDisplay";
import { WeatherCard } from "./WeatherCard";

export const displayManager = () => {
    const noLocation = (targetDiv) => {
        const noLocationDiv = document.createElement('div');
        noLocationDiv.classList.add('alert-div');
        noLocationDiv.textContent = 'Set a location to get Weather Data';

        targetDiv.appendChild(noLocationDiv);
    }

    const mainWeather = (data, targetDiv, city, country) => {
        MainWeatherDisplay(data, city)
    }
}