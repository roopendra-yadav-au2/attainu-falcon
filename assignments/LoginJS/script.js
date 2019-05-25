var username = "user_123";
var password = "password";

document.querySelector("#login").addEventListener("click", function() {
  validate(username, password);
});

function validate(username, password) {
  var user=document.querySelector("#user").value;
  var pass=document.querySelector("#pass").value;

  if(user.length<6) {
    alert("Username must contain 6 or more characters");
    return false;
  }
  else if(pass.length<8) {
    alert("Password must contain 8 or more characters");
    return false;
  }
  else if(!isAllowed(user)) {
    alert("Username contains invalid characters");
    return false;
  }
  else if(!isNaN(user[0])) {
    alert("Username cannot start with a digit");
    return false;
  }
  else if(user.toLowerCase() != username.toLowerCase() || pass != password) {
    alert("Username and password do not match");
    return false;
  }
  else {
    alert("Logged in successfully");
    return true;
  }
   
}

function isAllowed(string) {
  var i, code;

  for(i=0; i<string.length; i++) {
    code = string.charCodeAt(i);
    if(!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) &&
      !(code == 95)) { // '_'
      return false;
    }
  }

  return true;
}