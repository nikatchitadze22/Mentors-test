document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  console.log(user);

  alert("Registration successful!");
});
