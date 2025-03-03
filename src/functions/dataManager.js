import { tempToCelsius } from "./utils";

export const dataManager = () => {
    let currentCity = null;
    let currentCountry = null;

    const getCity = () => currentCity;
    const getCountry = () => currentCountry;
    
    const changeCity = (city) => currentCity = city;
    const changeCountry = (country) => currentCountry = country;

    const conditionManagerFunc = () => {
        let lastRetrieved = null;
        let currentWeatherData = null;
        const getLastRetrieved = () => lastRetrieved;
        const updateLastRetrieved = () => lastRetrieved = new Date();
        const changeData = (data) => currentWeatherData = data;

        const getData = (dataOf) => {
            if (dataOf === 'current') {
                return timeConditions(currentWeatherData['currentConditions']);
            }

            return timeConditions(currentWeatherData['days'][dataOf]);
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

            return { getTempF, getTempC, getDesc, getFeelsLike, getFeelsMax , getFeelsMin }
        }
        
        return { getLastRetrieved, updateLastRetrieved, changeData, getData }
    }

    const conditionManager = conditionManagerFunc();

    return { getCity, getCountry, changeCity, changeCountry, conditionManager  }

}