/*role selection*/

function selectRole(role) {
  localStorage.setItem("role", role);
  alert("Role selected: " + role);
  window.location.href = "signup.html";
}

/*
   SIGNUP LOGIC
 */
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  
  if (name === "" || email === "" || password === "" || confirm === "") {
    alert("All fields are required");
    return;
  }
  
  if (password !== confirm) {
    alert("Password does not match");
    return;
  }
  
  const role = localStorage.getItem("role");
  
  const user = {
    name: name,
    email: email,
    role: role
  };
  
  localStorage.setItem("user", JSON.stringify(user));
  
  alert("Signup successful");
  window.location.href = "login.html";
}

/* LOGIN LOGIC*/
function login() {
  const email = document.getElementById("loginEmail").value;
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    alert("No user found. Please signup first.");
    return;
  }
  
  if (email !== user.email) {
    alert("Invalid email");
    return;
  }
  
  localStorage.setItem("isLoggedIn", "true");
  alert("Login successful");
  
  // Redirect based on role
  if (user.role === "customer") {
    window.location.href = "../customer-dashboard.html";
  } else if (user.role === "helper") {
    window.location.href = "../helper-dashboard.html";
  } else {
    window.location.href = "../admin-dashboard.html";
  }
}

/*LOGOUT */
function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out");
  window.location.href = "auth/login.html";
}
