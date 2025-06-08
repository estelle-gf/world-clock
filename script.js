function updateTime() {
let londonElement=document.querySelector("#london");
let londonDateElement= londonElement.querySelector(".date");    
let londonTimeElement= londonElement.querySelector(".time");
let londonTime =moment().tz("Europe/London");
londonDateElement.innerHTML= moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");

let parisElement=document.querySelector("#paris");
let parisDateElement= parisElement.querySelector(".date");    
let parisTimeElement= parisElement.querySelector(".time");
let parisTime =moment().tz("Europe/Paris");
parisDateElement.innerHTML= moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML=parisTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();}
   let cityName = event.target.options[event.target.selectedIndex].text;
    if (cityName === "Current Location 🌎") {
        cityName = moment.tz.guess().split("/")[1].replace("_", " ");}

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =`
    <div class="city">
     <div>
      <h2>${cityName}</h2>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>`} 
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
