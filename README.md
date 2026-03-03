# BaaS Comparison Project: Firebase, Supabase & Appwrite

This project is part of the **Frontend Development Bootcamp (Sprint 3.7)**. It demonstrates the integration of three different **Backend as a Service (BaaS)** platforms to handle authentication and database operations in a decoupled web application.

---

## Test Credentials

To evaluate the application without creating a new account, please use the following credentials. They are valid for the Firebase implementation (and will be synchronized with Supabase and Appwrite):

| Field    | Value                 |
| :------- | :-------------------- |
| **Email** | `testuser@test.com` |
| **Password** | `123456`            |

---

## Tech Stack

- **Language**: Vanilla JavaScript (ES6+)
- **Tools**: Vite, HTML5, CSS3
- **Platforms**: 
  - **Firebase** (Implemented: Auth & Firestore)
  - **Supabase** (In progress)
  - **Appwrite** (In progress)

---

## Project Structure

- `index.html`: Main interface with Auth and To-Do sections.
- `src/firebase-logic.js`: Firebase initialization and core functions.
- `src/main.js`: DOM logic, event listeners, and UI state management.
- `src/style.css`: Application styling.

---

## Setup & Installation

1. **Clone the repository**:
   git clone <your-repo-url>


2. **Install dependencies**:
npm install


3. **Run the development server**:
npm run dev


## How to Use
Follow these steps to test the application logic:

1. Start the App: Once the server is running, open the local URL (usually http://localhost:5173) in your browser.

2. Authentication:

 - Enter the Test Credentials provided above in the login form.

 - Click the Login button.

 - If successful, the login form will disappear, and the To-Do section will be revealed.

3. Manage Tasks:

 - In the input field, type a new task (e.g., "Finish Sprint 3.7").

 - Click Add Task. The task will be sent to the cloud (Firebase Firestore) and automatically displayed in your list.

4. Data Isolation: Each user only sees their own tasks. Even if multiple people use the app, your list remains private.

5. Sign Out: Click the Logout button to clear your session and return to the login screen.


Author Irene V. Sahun - GitHub: isahun

Created as part of the IT Academy Frontend BootCamp.