// *********Register Function*******//
function register(event) {
  event.preventDefault();
  var name = document.getElementById("userName").value;
  // console.log(name);
  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("userConfirmPassword").value;  



  if(name && email && password && confirmPassword){
    if(password.length >= 8 && confirmPassword.length >= 8){
      if(password == confirmPassword){
        // console.log(userInfo);
        
        var userInfo = {hStarUser: name, hStarEmail: email, hStarPass: password, hStarConfirmPass: confirmPassword};
        var multiUsers = JSON.parse(localStorage.getItem("hotStarUsers")) || [];
        var flagForEmail = false;
        
        for(var i = 0; i<multiUsers.length; i++){
          if(multiUsers[i].hStarEmail == email){
            flagForEmail = true;
          }
        }
        if(!flagForEmail){
          multiUsers.push(userInfo);
          localStorage.setItem("hotStarUsers", JSON.stringify(multiUsers));
          alert("Registered Successful.");
          window.location.href = `./Login.html`;
        }else{
          alert("You're Already Registered with this Email")
        }
      }else{
        alert("Passwords doesn't Match.")
      }
    }else{
      alert("Passwords must be more than Eight");
    }
  }else{
    alert("All fields are mandatory.");
  }

}

// ************Login Function***********//

function login(event) {
  event.preventDefault();

  var email = document.getElementById("userEmail").value;
  // console.log(name);
  var password = document.getElementById("userPassword").value;

  
  var hStarLogin = JSON.parse(localStorage.getItem("hotStarUsers"));
  // console.log(hStarLogin);
  
  var flagForEmail = false;
  var currentUser;
  for(var i=0; i<hStarLogin.length; i++){
    // console.log(hStarLogin[i].hStarEmail);
    if(hStarLogin[i].hStarEmail == email && hStarLogin[i].hStarPass == password){
      // console.log(hStarLogin[i]);
      flagForEmail = true;
      currentUser = hStarLogin[i];
    }
  }if(flagForEmail == true){  
    // console.log(currentUser);
    localStorage.setItem("hStarActiveUser", JSON.stringify(currentUser));
    alert("Logged IN ")
    window.location.href = `./HomePage.html`;
  }else{
    alert("Please Register to Login..")
  }

  
}


