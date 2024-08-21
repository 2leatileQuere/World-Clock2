function updateTime() {
  // Gaborone
  let gaboroneElement = document.querySelector("#gaborone");
  if (gaboroneElement) {
    let gaboroneDateElement = gaboroneElement.querySelector(".date");
    let gaboroneTimeElement = gaboroneElement.querySelector(".time");
    let gaboroneTime = moment().tz("Africa/Gaborone");

    gaboroneDateElement.innerHTML = gaboroneTime.format("MMMM Do YYYY");
    gaboroneTimeElement.innerHTML = gaboroneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Cape Town
  let capeTownElement = document.querySelector("#cape-town");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Gaborone");

    capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Monaco
  let monacoElement = document.querySelector("#monaco");
  if (monacoElement) {
    let monacoDateElement = monacoElement.querySelector(".date");
    let monacoTimeElement = monacoElement.querySelector(".time");
    let monacoTime = moment().tz("Europe/Monaco");

    monacoDateElement.innerHTML = monacoTime.format("MMMM Do YYYY");
    monacoTimeElement.innerHTML = monacoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Abu Dhabi
  let abuDhabiElement = document.querySelector("#abu-dhabi");
  if (abuDhabiElement) {
    let abuDhabiDateElement = abuDhabiElement.querySelector(".date");
    let abuDhabiTimeElement = abuDhabiElement.querySelector(".time");
    let abuDhabiTime = moment().tz("Asia/Dubai");

    abuDhabiDateElement.innerHTML = abuDhabiTime.format("MMMM Do YYYY");
    abuDhabiTimeElement.innerHTML = abuDhabiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
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
