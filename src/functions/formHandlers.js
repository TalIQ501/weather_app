import { weatherDataAPI } from "./weatherAPI";

export const weatherFormHandler = async (dataManager, formData) => {
    const country = formData.get('input-country');
    const city = formData.get('input-city');
    const weatherData = await weatherDataAPI(`${city},${country}`);

    if (weatherData === null) {
        console.log('Failed to retrieve data');
        return;
    }
    
    dataManager.setCity(city);
    dataManager.setCountry(country);
    
    await dataManager.conditionManager.setData(weatherData);
    dataManager.conditionManager.updateLastRetrieved();
    return;
}