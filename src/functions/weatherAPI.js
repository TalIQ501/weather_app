export const weatherDataAPI = async (location) => {
    try {
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=S3BVCEDB2EY63VKWVY2EPCXKW`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error fetching data: ', err);
    }
}