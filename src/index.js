import { displayManager } from './components/displayManager';
import { dataManager } from './functions/dataManager';
import { weatherFormHandler } from './functions/formHandlers';
import { refreshData } from './functions/refreshData';
import './styles.css';

const contentDiv = document.getElementById('content');
const dialogWeatherForm = document.getElementById('dialog-weather-form');
const weatherForm = document.getElementById('weather-form');
const btnSetRegion = document.getElementById('btn-set-location');
const btnRefresh = document.getElementById('btn-refresh');
const btnToggleScale = document.getElementById('btn-toggle-temp-scale');

const dataMng = dataManager();
const dispMng = displayManager();

btnSetRegion.addEventListener('click', () => dialogWeatherForm.showModal())

btnRefresh.addEventListener('click', () => refreshData(dataMng, dispMng, contentDiv));

btnToggleScale.addEventListener('click', () => {
    dataMng.conditionManager.toggleScale();

    contentDiv.innerHTML = '';
    dispMng.mainWeatherPage(contentDiv, dataMng);
})

weatherForm.addEventListener('submit', async e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    await weatherFormHandler(dataMng, formData);

    dispMng.mainWeatherPage(contentDiv, dataMng);

    dialogWeatherForm.close()
})