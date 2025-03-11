import snowImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/snowy-4.svg';
import snowShowersImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/snowy-6.svg';
import thunderRainImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/thunder.svg';
import rainImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/rainy-5.svg';
import showersImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/rainy-6.svg';
import fogCloudImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import cloudyDayImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg';
import cloudyNightImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/cloudy-night-1.svg';
import dayImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/day.svg';
import nightImg from '../img/weather-icons/amcharts_weather_icons_1.0.0/animated/night.svg';

export const IconPicker = (icon) => {
    switch (icon) {
        case 'snow':
            return snowImg;
        case 'snow-showers-day':
        case 'snow-showers-night':
            return snowShowersImg;
        case 'rain':
            return rainImg;
        case 'showers-day':
        case 'showers-night':
            return showersImg;
        case 'thunder-rain':
        case 'thunder-showers-day':
        case 'thunder-showers-night':
            return thunderRainImg;
        case 'fog':
        case 'wind':
        case 'cloudy':
            return fogCloudImg;
        case 'partly-cloudy-day':
            return cloudyDayImg;
        case 'partly-cloudy-night':
            return cloudyNightImg;
        case 'clear-night':
            return nightImg;
        case 'clear-day':
        default:
            return dayImg;
    }
}