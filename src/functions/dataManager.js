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

        let scaleFahr = false;

        const getScale = () => scaleFahr;
        const toggleScale = () => scaleFahr = !scaleFahr;

        const getLastRetrieved = () => lastRetrieved;
        const updateLastRetrieved = () => lastRetrieved = new Date();
        const setData = (data) => currentWeatherData = data;
        
        const getData = async (dataOf) => {
            if (dataOf === 'current') {
                const conditionObj = timeConditions(currentWeatherData['currentConditions']);
                return conditionObj;
            }
            
            return timeConditions(currentWeatherData['days'][dataOf]);
        }
        
        const getAllData = () => currentWeatherData;
        
        const getDayDesc = () => currentWeatherData['description'];

        const timeConditions = (timeConditions) => {
            const temperature = timeConditions.temp;
            const conditionsDesc = timeConditions.conditions;
            const feelsLike = timeConditions.feelslike;
            const feelsLikeMax = timeConditions.feelslikemax;
            const feelsLikeMin = timeConditions.feelslikemin;
            const icon = timeConditions.icon;
        
            const getTemp = () => {
                if (scaleFahr === true) return temperature
                return tempToCelsius(temperature)
            }
            //const getTempC = () => tempToCelsius(temperature);
            const getIcon = () => icon;
            const getDesc = () => conditionsDesc;
            const getFeelsLike = () => feelsLike;
            const getFeelsMax = () => feelsLikeMax;
            const getFeelsMin = () => feelsLikeMin;

            return { getTemp, getIcon, getDesc, getFeelsLike, getFeelsMax , getFeelsMin }
        }
        
        return { getScale, toggleScale, getLastRetrieved, updateLastRetrieved, setData, getData, getAllData, getDayDesc }
    }

    const conditionManager = conditionManagerFunc();

    return { getCity, getCountry, setCity, setCountry, conditionManager }
}