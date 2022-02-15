function nameQ() {
let name = prompt("Lütfen adınızı giriniz:");
document.getElementById("myName").innerText = name;
}
function timeInfo()
{
    var toDayInfo = new Date();
    var days= toDayInfo.getDay();
    
    if(days ==1) {
        days= "Pazartesi";
    } 
    else if (days == 2) {
        days="Salı";
    } else if (days == 3) {
        days="Çarşamba";
    } else if (days == 4) {
        days="Perşembe";
    } else if (days == 5) {
        days="Cuma";
    } else if (days == 6) {
        days="Cumartesi";
    } else if (days == 7) {
        days="Pazar";
    }
    document.getElementById("myClock").innerText = toDayInfo.toLocaleTimeString();
    document.getElementById("dayInfo").textContent= days.toString();
}
var myTimes=setInterval(function(){timeInfo()},1000);
nameQ();
