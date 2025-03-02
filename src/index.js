import './styles.css'

const weatherForm = document.getElementById('weather-form');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    weatherFormHandler(formData);
})

const weatherDataAPI = async (location) => {
    try {
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=S3BVCEDB2EY63VKWVY2EPCXKW`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error fetching data: ', err);
    }
}

const weatherFormHandler = async (formData) => {
    const country = formData.get('input-country');
    const city = formData.get('input-city');
    const weatherData = await weatherDataAPI(`${city},${country}`);
    
    console.log(weatherData);
}

const tempToCelsius = (tempFahr) => {
    return (tempFahr - 32) * 5 / 9;
}

const timeConditions = (timeConditions) => {
    const temperature = timeConditions.temp;
    const conditionsDesc = timeConditions.conditions;
    const feelsLike = timeConditions.feelslike;
    const feelsLikeMax = timeConditions.feelslikemax;
    const feelsLikeMin = timeConditions.feelslikemin;

    const getTempF = () => temperature;
    const getTempC = () => tempToCelsius(temperature);
    const getDesc = () => conditionsDesc;
    const getFeelsLike = () => feelsLike;
    const getFeelsMax = () => feelsLikeMax;
    const getFeelsMin = () => feelsLikeMin;
}
