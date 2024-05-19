const registration = document.getElementById("registration");
const entrance = document.getElementById("entrance");
const forms = document.getElementById("forms");

registration.addEventListener("click", () => {
  forms.style.marginLeft = "0%";
  registration.style.color = "#333";
  entrance.style.color = "#929292";
});

entrance.addEventListener("click", () => {
  forms.style.marginLeft = "-108%";
  registration.style.color = "#929292";
  entrance.style.color = "#333";
});

//Save user//
const users = [];

const registUsername = document.getElementById("registUsername");
const registEmail = document.getElementById("registEmail");
const registPassword = document.getElementById("registPassword");
const registError = document.getElementById("registError");

let userId = users.length;

function addUser() {
  userId = users.length;
  const user = {
    id: userId + 1,
    username: registUsername.value,
    email: registEmail.value,
    password: registPassword.value,
  };
  users.push(user);
  alert(
    `Регистрация успешна! \n \n Имя пользователя: ${registUsername.value} \n Email: ${registEmail.value}`
  );

  // window.location.replace("/main.html");
  window.location.href = "./main.html";

  localStorage.setItem("users", JSON.stringify(users));
  registError.innerHTML = "";
  entranceError.innerHTML = "";
  document.getElementById("registForm").reset();
  document.getElementById("entranceForm").reset();
}

document.getElementById("registForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const localUsers = JSON.parse(localStorage.getItem("users"));
  if (!localUsers) {
    addUser();
  } else {
    let checkUser = false;
    for (let i = 0; i < localUsers.length; i++) {
      if (localUsers[i].username == registUsername.value) {
        registError.innerHTML = "Имя пользователя уже используется";
        checkUser = true;
      }
    }
    if (!checkUser) {
      addUser();
    }
  }
});
//*Save user*//

//Check user//
const entranceUsername = document.getElementById("entranceUsername");
const entrancePassword = document.getElementById("entrancePassword");
const entranceError = document.getElementById("entranceError");

document.getElementById("entranceForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const localUsers = JSON.parse(localStorage.getItem("users"));
  let checkUser = false;
  for (let i = 0; i < localUsers.length; i++) {
    if (
      localUsers[i].username == entranceUsername.value &&
      localUsers[i].password == entrancePassword.value
    ) {
      checkUser = true;
    }
  }

  if (checkUser) {
    // window.location.replace("/main.html");
    window.location.href = "./main.html";

    entranceError.innerHTML = "";
    registError.innerHTML = "";
    document.getElementById("entranceForm").reset();
    document.getElementById("registForm").reset();
  } else {
    entranceError.innerHTML = "Неверный логин или пароль";
  }
});
//*Check user*//

//Open/Close password//
const entrancePasswordOpen = document.getElementById("entrancePasswordOpen");
const registPasswordOpen = document.getElementById("registPasswordOpen");

entrancePasswordOpen.addEventListener("click", () => {
  if (entrancePassword.type == "password") {
    entrancePassword.type = "text";
    entrancePasswordOpen.src = "./images/eyeClose.svg";
  } else {
    entrancePassword.type = "password";
    entrancePasswordOpen.src = "./images/eyeOpen.svg";
  }
});
registPasswordOpen.addEventListener("click", () => {
  if (registPassword.type == "password") {
    registPassword.type = "text";
    registPasswordOpen.src = "./images/eyeClose.svg";
  } else {
    registPassword.type = "password";
    registPasswordOpen.src = "./images/eyeOpen.svg";
  }
});
//*Open/Close password*//
