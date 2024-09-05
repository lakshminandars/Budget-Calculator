// Function to handle the login
function login() {
    // Get values from input fields
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pswd').value;

    // Basic validation to check if fields are filled
    if (username === "" || password === "") {
        alert("Please fill in both the username and password.");
        return;
    }

    // Retrieve stored user data from localStorage
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        // Store logged-in user information
        localStorage.setItem('loggedInUser', user.username);
        window.location = './index.html';
    } else {
        alert("Invalid username or password.");
    }
}

// Function to navigate back (optional)
function back() {
    window.history.back();
}

// GSAP animations
// gsap.utils.toArray(".row, h3, button").forEach((element) => {
//     gsap.from(element, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//             trigger: element,
//             start: "top 80%", // start when element is 80% from the top of the viewport
//             toggleActions: "play none none none"
//         }
//     });
// });
