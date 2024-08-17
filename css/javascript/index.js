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
updateTime();
setInterval(updateTime, 1000);
