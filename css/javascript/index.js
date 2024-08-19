function updateTime() {
  // Gaborone
  let GaboroneElement = document.querySelector("#gaborone");
  let GaboroneDateElement = GaboroneElement.querySelector(".date");
  let GaboroneTimeElement = GaboroneElement.querySelector(".time");
  let GaboroneTime = moment().tz("Botswana/Gaborone");

  GaboroneDateElement.innerHTML = GaboroneTime.format("MMMM Do YYYY");
  GaboroneTimeElement.innerHTML = GaboroneTime.format(
    "h:mm:ss [<small>]A[/small>]"
  );

  // Cape Town
  let CapeTownElement = document.querySelector("#Capetown");
  let CapeTownDateElement = CapeTownElement.querySelector(".date");
  let CapeTownTimeElement = CapeTownElement.querySelector(".time");
  let CapeTownTime = moment().tz("South Africa/CapeTown");

  CapeTownDateElement.innerHTML = CapeTownTime.format("MMMM Do YYYY");
  CapeTownTimeElement.innerHTML = CapeTownTime.format(
    "h:mm:ss [<small>]A[/small>]"
  );


  // Monaco
  let MonacoElement = document.querySelector("#Monaco");
  let MonacoDateElement = MonacoElement.querySelector(".date");
  let MonacoTimeElement = MonacoElement.querySelector(".time");
  let MonacoTime = moment().tz("Monaco/Monaco");

  MonacoDateElement.innerHTML = MonacoTime.format("MMMM Do YYYY");
  MonacoTimeElement.innerHTML = MonacoTime.format(
    "h:mm:ss [<small>]A[/small>]"
  );

    //
  let AbuDhabiElement = document.querySelector("#AbuDhabi");
  let AbuDhabiElement = AbuDhabiElement.querySelector(".date");
  let AbuDhabiTimeElement = AbuDhabiElement.querySelector(".time");
  let AbuDhabiTime = moment().tz("United Arab Emirates/Abu Dhabi");

  AbuDhabiDateElement.innerHTML = AbuDhabiTime.format("MMMM Do YYYY");
  AbuDhabiTimeElement.innerHTML = AbuDhabiTime.format(
    "h:mm:ss [<small>]A[/small>]"
  );
}
}
function updateCity (event){
  let cityTimeZone=event.target.value;
  if(cityTimeZone ==="current"){
    cityTimeZone=moment.tz.guess();
  }
  let cityName=cityTimeZone.replace("_"," ").split("/")[1];
  letcityTime=moment().tz(cityTimeZone);
  let citiesElement=document.querySelector("#cities");
  citiesElement.innerHTML=`
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

let citiesSelectElement=document.queryselector("#city");
citiesSelectElement.addEventListener("change",updateCity);
