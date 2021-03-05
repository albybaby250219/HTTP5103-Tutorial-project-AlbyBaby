window.onload = Pageloaded;

// FUNCTION FOR DOM LOGIC after the page loads

function Pageloaded(){
  var try_excerscise = document.getElementById("tryit")
  var Isadult="";
  function excerscise(){
    var age = prompt("Please input an age.");
    if (isNaN(age)) {
      Isadult = "Input is not a number";
      alert(Isadult);
    } 
    else {
      Isadult = (age > 18) ? "Adult" : "Child";
      if(Isadult==="Adult"){
        alert("Since you are " + age + " You can vote!!");
      }
      else{
        alert("You are a child!!");
      }
    }
    return Isadult;
  }
  try_excerscise.onclick = excerscise;
}