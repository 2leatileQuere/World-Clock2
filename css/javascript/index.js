function updateTime() {
  // Gaborone
  let GaboroneElemet = document.querySelector("#gaborone");
  let GaboroneDateElement = GaboroneElemet.querySelector(".date");
  let GaboroneTimeElement = GaboroneElemet.querySelector(".time");
  let GaboroneTime = moment().tz("Botswana/Gaborone");

  GaboroneDateElement.innerHTML = GaboroneTime.format("MMMM Do YYYY");
  GaboroneTimeElement.innerHTML = GaboroneTime.format(
    "h:mm:ss [<small>]A[/small>]"
  );

  // Cape Town
  let CapeTownElemet = document.querySelector("#gaborone");
  let CapeTownDateElement = GaboroneElemet.querySelector(".date");
  let CapeTownTimeElement = GaboroneElemet.querySelector(".time");
  let CapeTownTime = moment().tz("Botswana/Gaborone");

  CapeTownDateElement.innerHTML = GaboroneTime.format("MMMM Do YYYY");
  CapeTownTimeElement.innerHTML = GaboroneTime.format(
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
    `;


}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement=document.queryselector("#city");
citiesSelectElement.addEventListener("change",updateCity);
