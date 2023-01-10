/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello World!");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const loginDetails = {username: "admin", password: "password", nomeRestaurante: "McDonald's", nível: "20"};

var unameInput = document.getElementById("uname");
var pwordInput = document.getElementById("pword");

function validateForm() {
  //ver php para submeter o form!!!
  let x = document.forms["loginForm"]["uname"].value;
  let y = document.forms["loginForm"]["pword"].value;

  if (x != loginDetails.username || y != loginDetails.password) {
    alert("O campo está vazio, ou a informção está errada!");
    return false;
  }

  else
  {
    window.location.replace("https://www.alexmango.tk");
    return true;
  }
}
