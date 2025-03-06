import { tempToCelsius } from "./utils";

export const dataManager = () => {
    let currentCity = null;
    let currentCountry = null;

    const getCity = () => currentCity;
    const getCountry = () => currentCountry;
    
    const setCity = (city) => currentCity = city;
    const setCountry = (country) => currentCountry = country;

    const conditionManagerFunc = () => {
        let lastRetrieved = null;
        let currentWeatherData = null;

        let scaleFahr = true;

        const toggleScale = () => scaleFahr = !scaleFahr;

        const getLastRetrieved = () => lastRetrieved;
        const updateLastRetrieved = () => lastRetrieved = new Date();
        const setData = (data) => currentWeatherData = data;

        const getData = (dataOf) => {
            if (dataOf === 'current') {
                return timeConditions(currentWeatherData['currentConditions']);
            }

            return timeConditions(currentWeatherData['days'][dataOf]);
        }

        const getAllData = () => currentWeatherData;

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

            return { getTempF, getTempC, getDesc, getFeelsLike, getFeelsMax , getFeelsMin }
        }
        
        return { toggleScale, getLastRetrieved, updateLastRetrieved, setData, getData, getAllData }
    }

    const conditionManager = conditionManagerFunc();

    return { getCity, getCountry, setCity, setCountry, conditionManager }
}