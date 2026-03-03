import "./style.css";
import { login, addTask, logOut } from "./firebase-logic";

const loginBtn = document.getElementById("btn-login");
const addBtn = document.getElementById("btn-add-task");
const logoutBtn = document.getElementById("btn-logout");


//Login event
loginBtn.addEventListener("click", async () => {
  const emailInput = document.getElementById("email").value;
  const passInput = document.getElementById("password").value;
  const welcomeEmail = document.getElementById("user-email");

  try {
    await login(emailInput, passInput); //wait for fb to tell us if login OK
    //UI changes if login successful:
    welcomeEmail.textContent = emailInput;
    document.getElementById("todo-section").style.display = "block";
    document.getElementById("auth-section").style.display = "none";
  } catch (error) {
    console.error("Error de login: ", error.message);
  }
});

//Add task event
addBtn.addEventListener("click", async () => {
  const textTasca = document.getElementById("task-input").value;
  try {
    await addTask(textTasca);

    document.getElementById("task-input").value = ""; // Netegem l'input
  } catch (error) {
    console.error("Error en guardar:", error);
  }
});

//SignOut event --> async funct bc fb needs to confirm logout
logoutBtn.addEventListener("click", async () => {
  try {
    await logOut(); //code stops here till fb confirms logout
    window.location.href = "login.html"; //if it goes throught, redirect
  } catch (error) {
    //if it doesn't, code skips to here
    console.error("Error de log out: ", error);
  }
});
