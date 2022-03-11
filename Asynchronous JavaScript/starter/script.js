'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountry(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); // Go public api and copy the link from here
  request.send();
  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
  });
}
// getCountry('Bangladesh');
getCountry('Pakistan');
getCountry('Turkey');
getCountry('Afganistan');
getCountry('Malaysia');
getCountry('Iran');
getCountry('Iraq');
getCountry('Syria');
getCountry('Egypt');
getCountry('indonesia');
getCountry('israel');
getCountry('Bangladesh');
getCountry('brazil');
getCountry('argentina');
getCountry('portugal');
getCountry('spain');
getCountry('france');
getCountry('germany');
getCountry('great britain');
getCountry('Italy');
getCountry('usa');
getCountry('canada');
getCountry('china');
