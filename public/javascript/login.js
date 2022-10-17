const signinFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

if (username && password) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {'Content-Type': 'application/json'}
    });

    if (resonse.ok) {
        // After successfully logged in, redirect to dashboard
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}
};

const signupButtonHandler = async () => {
    document.location.replace('/signup');
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);