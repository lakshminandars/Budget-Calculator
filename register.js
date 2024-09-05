// Function to handle the registration
function register() {
    // Get values from input fields
    const username = document.getElementById('uname').value;
    const accountNumber = document.getElementById('acno').value;
    const password = document.getElementById('pswd').value;

    // Basic validation to check if fields are filled
    if (username === "" || accountNumber === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    // Optional: Validate account number format (e.g., must be numeric)
    if (isNaN(accountNumber)) {
        alert("Account number must be numeric!");
        return;
    }

    // Retrieve existing users from localStorage, or initialize an empty array
    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Create a new user object
    const newUser = {
        username: username,
        accountNumber: accountNumber,
        password: password
    };

    // Add the new user to the users array
    users.push(newUser);

    // Store the updated users array back in localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    alert("Registration successful!");

    // Clear input fields after registration
    document.getElementById('uname').value = "";
    document.getElementById('acno').value = "";
    document.getElementById('pswd').value = "";

    // Redirect to the login page
    window.location = './login.html';
}

// Function to navigate back (optional)
function back() {
    window.history.back();
}
