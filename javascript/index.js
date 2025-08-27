let cityTimeZones = {
  "los-angeles": "America/Los_Angeles",
  paris: "Europe/Paris",
};

function setCityData(cityTag, momentNow) {
  let cityElement = document.querySelector(`#city-${cityTag}`);
  let cityDate = cityElement.querySelector(".date");
  let cityTime = cityElement.querySelector(".time");
  cityDate.innerHTML = momentNow
    .tz(cityTimeZones[cityTag])
    .format("MMMM Do YYYY");
  cityTime.innerHTML = momentNow
    .tz(cityTimeZones[cityTag])
    .format("hh:mm:ss [<small>]A[</small>]");
}

function updateTime() {
  let currentTime = moment();

  setCityData("los-angeles", currentTime);
  setCityData("paris", currentTime);
}

updateTime();
setInterval(updateTime, 1000);
