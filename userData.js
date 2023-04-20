






function login(event) {
    event.preventDefault();
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    // alert(email,password);
    var LSlogin = JSON.parse(localStorage.getItem("Users"));
    console.log(LSlogin);
    var flagForUser = false;
    for(var i=0; i<LSlogin.length; i++){
      // console.log(LSlogin[i].userEmail);
      if(LSlogin[i].userEmail == email && LSlogin[i].userPassword == password){
        flagForUser = true;
      }
    }
    if(flagForUser == true){
      alert("Registration Successful.")
    }else{
      alert("Credential does not match")
    }
  
  }