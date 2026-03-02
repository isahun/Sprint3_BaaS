import './style.css'
import { login, addTask } from './firebase-logic';

const loginBtn = document.getElementById("btn-login");
const registerBtn = document.getElementById("btn-register");
const addBtn = document.getElementById("btn-add-task");

//Login event
loginBtn.addEventListener("click", async() => {
  const emailInput = document.getElementById("email").value;
  const passInput = document.getElementById("password").value;

  try {
    const userInfo = await login(emailInput, passInput);
    console.log("Usuari ha iniciat sessió correctament!", userInfo.user);

    document.getElementById("todo-section").style.display = "block";
    document.getElementById("auth-section").style.display = "none";
  } catch (error) {
    console.error("Error de login: ", error.message);
  }
});

//Add task event
addBtn.addEventListener('click', async () => {
  const textTasca = document.getElementById('task-input').value;
  try {
    await addTask(textTasca);
    console.log("Tasca afegida correctament!");
    document.getElementById('task-input').value = ""; // Netegem l'input
  } catch (error) {
    console.error("Error en guardar:", error);
  }
});
