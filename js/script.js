window.onload = Pageloaded;

// FUNCTION FOR DOM LOGIC after the page loads

function Pageloaded(){
  var tryout = document.getElementById("Tryout")
  tryout.onclick = excerscise;
  function excerscise(){
    alert("Please head on to the excerscise link at the top!!!");
  }
}