
function validateRegistration() {
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    
    if (!isValidUsername(username)) {
        alert("Invalid username. Please use only letters, numbers, and underscores.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Invalid password. It must be at least 8 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

   
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("You already have an account. Please login.");
        return false;
    }

   
    saveToDatabase(username, email, password);

    
    alert("Registration successful! You can now login.");

    return true;
}



function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9_]+$/; 
    return regex.test(username);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
}

function isValidPassword(password) {
    return password.length >= 8;
}

function saveToDatabase(username, email, password) {
   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
}



