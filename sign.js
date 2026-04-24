function login(){
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let error = document.getElementById("error");

  if(user === "" || pass === ""){
    error.innerText = "Please fill all fields!";
    return;
  }

  if(pass.length < 4){
    error.innerText = "Password must be at least 4 characters!";
    return;
  }

  // SAVE USER
  localStorage.setItem("user", user);

  // REDIRECT BACK
  window.location.href = "index.html";
}

function goBack(){
  window.history.back();
}