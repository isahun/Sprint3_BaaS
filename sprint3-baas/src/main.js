import "./style.css";
import { login, addTask, logOut, getTasks } from "./firebase-logic";

const loginBtn = document.getElementById("btn-login");
const addBtn = document.getElementById("btn-add-task");
const logoutBtn = document.getElementById("btn-logout");

const tasksUl = document.getElementById("task-list");

//get tasks function
const listTasks = async () => {
  try {
    const snapshot = await getTasks();
    tasksUl.innerHTML = ""; //clean list first

    snapshot.forEach((doc) => {
      const task = doc.data();
      const li = document.createElement("li");
      li.textContent = task.títol;
      tasksUl.appendChild(li);
    });
  } catch (error) {
    console.error("Error visualitzant tasques: ", error);
  }
};

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
    await listTasks(); //to retrieve user tasks from the login on
  } catch (error) {
    console.error("Error de login: ", error.message);
  }
});

//Add task event
addBtn.addEventListener("click", async () => {
  const textTasca = document.getElementById("task-input").value;
  try {
    await addTask(textTasca);
    await listTasks(); //to see new list, with new task in it
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
