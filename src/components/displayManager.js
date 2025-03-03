export const displayManager = () => {
    const noLocation = (targetDiv) => {
        const noLocationDiv = document.createElement('div');
        noLocationDiv.classList.add('alert-div');
        noLocationDiv.textContent = 'Set a location to get Weather Data';
    }

    const createHomePage = (targetDiv) => {
        const homePageDiv = document.createElement('div');
        homePageDiv.setAttribute('id', 'homepage');

        targetDiv.appendChild(homePageDiv);
    }
}