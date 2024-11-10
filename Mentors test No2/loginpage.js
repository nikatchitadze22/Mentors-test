document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "username123@gmail.com" && password === "password123") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  