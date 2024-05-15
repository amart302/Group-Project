

const users = [];

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const error = document.getElementById("error");

let userId = users.length;

function addUser() {
    userId = users.length;
    const user = {
      id: userId + 1,
      username: username.value,
      email: email.value,
      password: password.value,
    };
    users.push(user);
    alert(`Регистрация успешна! \n \n Имя пользователя: ${username.value} \n Email: ${email.value}`);

    localStorage.setItem("users", JSON.stringify(users));
    error.innerHTML = "";
    document.getElementById("registrationForm").reset();
}

document.getElementById("registrationForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (users.length == 0) { 
        addUser();
    } else {
        const localUsers = JSON.parse(localStorage.getItem("users"));
        let checkUser = false;
        for (let i = 0; i < localUsers.length; i++) {
            if (localUsers[i].username == username.value) {
              error.innerHTML = "Имя пользователя уже существует"
              checkUser = true;
            }
          }
          if (!checkUser) {
            addUser();
          }
    }
  });
