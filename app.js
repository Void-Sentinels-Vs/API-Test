const btn = document.querySelector('.btn');
const data = document.querySelector('.data');
// ajax function

btn.addEventListener('click', loadData);

// ajax function
function loadData(){
    const xhr = new XMLHttpRequest();
    const apiKey = 'd4f16e53afe04283826224619251001';
    const endPoint = 'https://api.weatherapi.com/v1/current.json';
    const location = 'Borazjan';
    const url = `${endPoint}?key=${apiKey}&q=${location}`;
    xhr.open('GET',url);
    xhr.onload = function(){
        const dataApi = JSON.parse(this.response);
        console.log(dataApi.current.temp_c);
        data.textContent = dataApi.current.temp_c;
    }
    xhr.send();
}