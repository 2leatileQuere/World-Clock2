function updateTime() {
  // Gaborone
  let GaboroneElement = document.querySelector("#gaborone");
  if (gaboroneElement) {
    let gaboroneDateElement = gaboroneElement.querySelector(".date");
    let gaboroneTimeElement = gaboroneElement.querySelector(".time");
    let gaboroneTime = moment().tz("Botswana/Gaborone");

    gaboroneDateElement.innerHTML = gaboroneTime.format("MMMM Do YYYY");
    gaboroneTimeElement.innerHTML = gaboroneTime.format(
      "h:mm:ss [<small>]A[/small>]"
    );
  }

  // Cape Town
  let CapeTownElement = document.querySelector("#Capetown");
  if (capetownElement) {
    let CapeTownDateElement = CapeTownElement.querySelector(".date");
    let CapeTownTimeElement = CapeTownElement.querySelector(".time");
    let CapeTownTime = moment().tz("South Africa/CapeTown");

    CapeTownDateElement.innerHTML = CapeTownTime.format("MMMM Do YYYY");
    CapeTownTimeElement.innerHTML = CapeTownTime.format(
      "h:mm:ss [<small>]A[/small>]"
    );
  }

  // Monaco
  let MonacoElement = document.querySelector("#Monaco");
  if (MonacoElement) {
    let MonacoDateElement = MonacoElement.querySelector(".date");
    let MonacoTimeElement = MonacoElement.querySelector(".time");
    let MonacoTime = moment().tz("Monaco/Monaco");

    MonacoDateElement.innerHTML = MonacoTime.format("MMMM Do YYYY");
    MonacoTimeElement.innerHTML = MonacoTime.format(
      "h:mm:ss [<small>]A[/small>]"
    );
  }

  //Abu Dhabi
  let AbuDhabiElement = document.querySelector("#AbuDhabi");
  if (AbuDhabiElement) {
    let AbuDhabiElement = AbuDhabiElement.querySelector(".date");
    let AbuDhabiTimeElement = AbuDhabiElement.querySelector(".time");
    let AbuDhabiTime = moment().tz("United Arab Emirates/Abu Dhabi");

    AbuDhabiDateElement.innerHTML = AbuDhabiTime.format("MMMM Do YYYY");
    AbuDhabiTimeElement.innerHTML = AbuDhabiTime.format(
      "h:mm:ss [<small>]A[/small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  letcityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
