// Function to handle the form submission
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the input values
    const name = document.querySelector('input[type="text"]:nth-of-type(1)').value;
    const email = document.querySelector('input[type="text"]:nth-of-type(2)').value;
    const password = document.querySelector('input[type="password"]').value;

    // Validate the form inputs
    if (validateForm(name, email, password)) {
        // Save the user data to localStorage
        saveUserData(name, email, password);
        alert('Signup successful! You can now log in.');
        window.location.href = './login.html'; // Redirect to login page
    }
});

// Function to validate the form fields
function validateForm(name, email, password) {
    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
        return false;
    }

    // Check if the email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}

// Function to save user data in localStorage
function saveUserData(name, email, password) {
    const user = {
        name: name,
        email: email,
        password: password,
    };

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(user));
}
