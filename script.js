function updateTime() {
let londonElement=document.querySelector("#london");
let londonDateElement= londonElement.querySelector(".date");    
let londonTimeElement= londonElement.querySelector(".time");
let londonTime =moment().tz("Europe/London");
londonDateElement.innerHTML= moment().format("MMMM do YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");

let parisElement=document.querySelector("#paris");
let parisDateElement= parisElement.querySelector(".date");    
let parisTimeElement= parisElement.querySelector(".time");
let parisTime =moment().tz("Europe/Paris");
parisDateElement.innerHTML= moment().format("MMMM do YYYY");
parisTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);