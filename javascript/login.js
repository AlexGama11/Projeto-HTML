const loginDetails = {username: "admin", password: "password", nomeRestaurante: "McDonald's", nível: "20"};

var unameInput = document.getElementById("uname");
var pwordInput = document.getElementById("pword");

function validateForm() {
  //ver php para submeter o form!!!
  //event.preventDefault();
  let x = document.forms["loginForm"]["uname"].value;
  let y = document.forms["loginForm"]["pword"].value;

  if (x != loginDetails.username || y != loginDetails.password) {
    alert("O campo está vazio, ou a informção está errada!");
    delete window.alert;
    return false;
  }

  else
  {
    //window.location.replace("https://www.alexmango.tk");
    alert(`Username:${loginDetails.username}; \nPassword: ${loginDetails.password}; \nNome do Restaurante: ${loginDetails.nomeRestaurante}; \nNível: ${loginDetails.nível}.`);
    delete window.alert;
    return true;
  }
}