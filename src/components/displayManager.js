import { MainWeatherDisplay } from "./MainWeatherDisplay";
import { WeatherCard } from "./WeatherCard";

export const displayManager = () => {
    const noLocation = (targetDiv) => {
        const noLocationDiv = document.createElement('div');
        noLocationDiv.classList.add('alert-div');
        noLocationDiv.textContent = 'Set a location to get Weather Data';

        targetDiv.appendChild(noLocationDiv);
    }

    const mainWeatherPage = async (targetDiv, dataManager) => {
        const time = dataManager.conditionManager.getLastRetrieved();
        const startHour = time.getHours()
        const mainDisp = await MainWeatherDisplay(dataManager);
        const lowerDisp = document.createElement('div');
        lowerDisp.classList.add('lower-display')

        for (let i = startHour + 1; i < 24; i++) {
            const card = await WeatherCard(dataManager, i);
            lowerDisp.appendChild(card)
        }

        targetDiv.appendChild(mainDisp);
        targetDiv.appendChild(lowerDisp);
    }

    return { noLocation, mainWeatherPage }
}