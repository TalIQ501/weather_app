import { weatherDataAPI } from "./weatherAPI";

export const weatherFormHandler = async (formData) => {
    const country = formData.get('input-country');
    const city = formData.get('input-city');
    const weatherData = await weatherDataAPI(`${city},${country}`);
    
    console.log(weatherData);
}