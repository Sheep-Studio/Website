const pass = document.getElementById('password').value
const login = document.getElementById('Login')

login.addEventListener('login', (event) => {
  event.preventDefault();
  if(pass === $password) {
    document.getElementById('password').hidden = true
    document.getElementById('username').hidden = true
  }
}
