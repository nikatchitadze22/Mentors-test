const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" }
  ];
  
  function populateUserTable() {
    const userTable = document.getElementById("userTable");
    userTable.innerHTML = "";
  
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="editUser(${user.id})">Edit</button>
          <button onclick="deleteUser(${user.id})">Delete</button>
        </td>
      `;
      userTable.appendChild(row);
    });
  }
  
  function editUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
      const newName = prompt("Enter new name:", user.name);
      const newEmail = prompt("Enter new email:", user.email);
  
      if (newName && newEmail) {
        user.name = newName;
        user.email = newEmail;
        populateUserTable();
      }
    }
  }
  
  function deleteUser(id) {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      if (confirm("Are you sure you want to delete this user?")) {
        users.splice(userIndex, 1);
        populateUserTable();
      }
    }
  }
  
  function handleCurrencyExchange() {
    const currencySelect = document.getElementById("currency");
    const exchangeRateElement = document.getElementById("exchange-rate");
    const selectedCurrency = currencySelect.value;
  
    let exchangeRate = 0;
  
    switch (selectedCurrency) {
      case "USD_EUR":
        exchangeRate = 0.85;
        break;
      case "USD_GBP":
        exchangeRate = 0.75;
        break;
      case "USD_JPY":
        exchangeRate = 110.0;
        break;
      default:
        exchangeRate = 0;
    }
  
    exchangeRateElement.textContent = `Exchange Rate: ${exchangeRate}`;
  }
  
  document.getElementById("currency").addEventListener("change", handleCurrencyExchange);
  
  window.onload = function() {
    populateUserTable();
    handleCurrencyExchange();
  };
  