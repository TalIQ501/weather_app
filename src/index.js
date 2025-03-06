import { displayManager } from './components/displayManager';
import { dataManager } from './functions/dataManager';
import { weatherFormHandler } from './functions/formHandlers';
import './styles.css';

const contentDiv = document.getElementById('content');
const dialogWeatherForm = document.getElementById('dialog-weather-form');
const weatherForm = document.getElementById('weather-form');
const setRegion = document.getElementById('btn-set-location');

const dataMng = dataManager();
const dispMng = displayManager();

setRegion.addEventListener('click', () => dialogWeatherForm.showModal())

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    weatherFormHandler(dataMng, formData);
})