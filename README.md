# BaaS Comparison Project: Firebase, Supabase & Appwrite


This project is part of the **Frontend Development Bootcamp (Sprint 3.7)**. It demonstrates the integration of three different **Backend as a Service (BaaS)** platforms to handle authentication and database operations in a decoupled web application.


It will include comprehensive comparison between the three major Backend-as-a-Service (BaaS) platforms: **Firebase**, **Supabase**, and **Appwrite**. This project implements the same Task Manager functionality across all three services to evaluate their developer experience, setup complexity, and performance.


---


## Project Overview
The goal of this project is to build a functional To-Do list application that interacts with three different backend providers. Each version of the app allows users to:
* **Secure Authentication**: Sign in with a test account.
* **Task Management**: Create new tasks and store them in a remote database.
* **Data Isolation**: Users only see their own tasks (Row Level Security & Permissions).



---


## Branch & Repository Structure
To avoid configuration conflicts and maintain a clean code history, the project is organized into branches. Each branch contains the specific logic and environment setup for its provider:


* **`main`**: The "Home" branch, featuring the **Firebase** (Firestore & Auth) implementation.
* **`feature/supabase`**: The branch dedicated to the **Supabase** (PostgreSQL & Auth) implementation.
* **`feature/appwrite`**: The branch dedicated to the **Appwrite** (Cloud Databases & Auth) implementation.


> **Note to Reviewer:** To test each implementation, please switch to the corresponding branch using:
> `git checkout <branch-name>`


---


## Test Credentials
For your convenience, all three platforms share the same test email, but the passwords are customized for each service to ensure independent testing:


| Platform | Email | Password |
| :--- | :--- | :--- |
| **Firebase** | `testuser@test.com` | `firebase` |
| **Supabase** | `testuser@test.com` | `supabase` |
| **Appwrite** | `testuser@test.com` | `appwrite` |


---


## BaaS Comparative Analysis


| Feature | **Firebase** 🔥 | **Supabase** ⚡ | **Appwrite** 🛡️ |
| :--- | :--- | :--- | :--- |
| **Setup Ease** | High (Very intuitive) | Medium (Requires SQL knowledge) | Low (Requires manual IDs/Attributes) |
| **Response Time** | Instant (Real-time sync) | Very Fast | Fast & Reliable |
| **Documentation** | Extensive but vast | Excellent & Modern | Good but evolving quickly |
| **Developer Exp.** | Beginner friendly | Professional (needs some skill in SQL) | Specific (Highly secure/Robust) |

---


## Technical Reflections & Development Experience


### 1. Ease of Configuration
* **Firebase** wins on speed. The NoSQL nature allows you to push data without pre-defining schemas or column names.
* **Appwrite** was the most demanding. It requires manual creation of **Attributes** (title, completed, user) in the dashboard before the code can interact with the database.


### 2. Security & Logic
* **Supabase** introduced the power of **Row Level Security (RLS)**. Writing SQL policies was a great way to handle data ownership at the database level.
* **Appwrite** has a very strict session policy. We encountered errors when Vite hot-reloaded the page because a session was already active. This led to a better implementation: a **Session Restoration** logic on page load.


### 3. SDK & Documentation
* **Appwrite** is evolving fast. We had to refactor methods like `createDocument` to use **Object-Style parameters** to avoid "deprecated" warnings and ensure future compatibility.
* **Supabase** documentation is arguably the best for modern JavaScript developers, making the RLS setup very straightforward.


---


## Installation & Setup


1.  **Clone the repository:**
    git clone [https://github.com/isahun/Sprint3_BaaS.git](https://github.com/isahun/Sprint3_BaaS.git)
   
2.  **Install dependencies:**
    npm install
   
3.  **Environment Variables:**
    The project uses a `.env` file for API keys and Project IDs. Ensure you have the following variables defined (check each branch for specifics):
   
   
    * `Firebase`

    VITE_FIREBASE_API_KEY
    VITE_FIREBASE_PROJECT_ID


    * `Supabase`

    VITE_SUPABASE_URL
    VITE_SUPABASE_ANON_KEY


    * `Appwrite`

    VITE_APPWRITE_ENDPOINT
    VITE_APPWRITE_PROJECT_ID
    VITE_APPWRITE_DATABASE_ID
    VITE_APPWRITE_COLLECTION_ID

4.  **Launch Development Server:**  

    npm run dev


---
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

