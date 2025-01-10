const btn = document.querySelector('.btn');
const data = document.querySelector('.data');
// ajax function

btn.addEventListener('click', loadData);

// ajax function
function loadData(){
    const xhr = new XMLHttpRequest();
    const url = 'https://catfact.ninja/fact';
    xhr.open('GET',url);
    xhr.onload = function(){
        const dataApi = JSON.parse(this.response);
        console.log(dataApi.fact);
        data.textContent = dataApi.fact;
    }
    xhr.send();
}