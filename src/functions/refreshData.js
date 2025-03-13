import { weatherDataAPI } from "./weatherAPI";

export const refreshData = async (dataManager, displayManager, contentDiv) => {
    const city = dataManager.getCity();
    const country = dataManager.getCountry();
    if (city === null || country === null) return;

    const weatherData = await weatherDataAPI(`${city},${country}`);
    await dataManager.conditionManager.setData(weatherData);

    dataManager.conditionManager.updateLastRetrieved();

    contentDiv.innerHTML = '';
    
    displayManager.mainWeatherPage(contentDiv, dataManager);
}