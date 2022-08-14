var hores = document.getElementById("hores");
var minuts = document.getElementById("minuts");
var segons = document.getElementById("segons");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hores.textContent = hr;
      minuts.textContent = min;
      segons.textContent = sec;
      
    },1000
);