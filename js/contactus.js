window.onload = Pageloaded;

// FUNCTION FOR DOM LOGIC after the page loads

function Pageloaded(){
  var submit = document.getElementById("submit")
  submit.onclick = notification;
  function notification(){
    alert("Got it I will contact you shortly !!!!!!!!");
  }
}