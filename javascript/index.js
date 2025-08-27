// let cityArray = {
//   "los-angeles": "America/Los_Angeles",
//   paris: "Europe/Paris",
// };

let cityArray = [];
let citiesData = document.querySelector("#cities");
let citySelect = document.querySelector("#sel_cities");

cityArray.push({
  city_tag: "los-angeles",
  city: "Los Angeles",
  time_zone: "America/Los_Angeles",
});

cityArray.push({
  city_tag: "paris",
  city: "Paris",
  time_zone: "Europe/Paris",
});

let selectData = {
  london: {
    city_tag: "london",
    city: "London",
    time_zone: "Europe/London",
  },
  new_york: {
    city_tag: "new_york",
    city: "New York",
    time_zone: "America/New_York",
  },
  auckland: {
    city_tag: "auckland",
    city: "Auckland",
    time_zone: "Pacific/Auckland",
  },
};

function createCityBlock(city) {
  citiesData.innerHTML +=
    `<div class="city" id="city-${city.city_tag}">` +
    `<div><h2>${city.city}</h2>` +
    '<div class="date"></div></div><div class="time"></div></div>';
}

function buildCities() {
  cityArray.forEach(createCityBlock);
}

function setCityData(city, momentNow) {
  let cityElement = document.querySelector(`#city-${city.city_tag}`);
  let cityDate = cityElement.querySelector(".date");
  let cityTime = cityElement.querySelector(".time");
  cityDate.innerHTML = momentNow.tz(city.time_zone).format("MMMM Do YYYY");
  cityTime.innerHTML = momentNow
    .tz(city.time_zone)
    .format("hh:mm:ss [<small>]A[</small>]");
}

function updateTime() {
  let currentTime = moment();

  cityArray.forEach(function (city) {
    setCityData(city, currentTime);
  });
}

function selectNewCity(event) {
  newCity = event.target.value;
  if (newCity !== "") {
    cityArray = [];
    citiesData.innerHTML = "";
    createCityBlock(selectData[newCity]);
    cityArray.push(selectData[newCity]);
    updateTime();
  }
}

citySelect.addEventListener("change", selectNewCity);

buildCities();
updateTime();
setInterval(updateTime, 1000);
