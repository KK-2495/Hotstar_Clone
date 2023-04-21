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
  
  
}


