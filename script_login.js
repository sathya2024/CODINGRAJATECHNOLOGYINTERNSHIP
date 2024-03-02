function validateLogin() {
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    
    if (!isValidUsername(username)) {
        alert("Invalid username. Please check your username and try again.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Invalid password. Please check your password and try again.");
        return false;
    }

    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        alert("Login successful!");
       
        window.location.href = "main.html";
        return false;
    } else {
        alert("Invalid username or password. Please check your credentials and try again.");
        return false;
    }
}

function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9_]+$/; 
    return regex.test(username);
}

function isValidPassword(password) {
    return password.length >= 8;
}