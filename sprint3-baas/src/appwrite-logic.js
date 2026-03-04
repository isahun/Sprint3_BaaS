import { Client, Account, Databases, ID, Query, account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

const DATABASE_ID = "69a736970014898261fe";
const COLLECTION_ID = "tasques";

//login
export const loginAw = async (email, password) => {
  return await account.createEmailPasswordSession({
    email: email,
    password: password,
  });
};

//add task
export const addTaskAw = async (nomTasca) => {
  const user = await account.get(); //get logged user

  return await databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    {
      titol: nomTasca,
      completada: false,
      usuari: user.$id,
    },
  );
};

//get tasks
export const getTasksAw = async () => {
  const user = await account.get();

  const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal("usuari", user.$id),
  ]);

  return response.documents;
};

//logout
export const logOutAw = async () => {
  return await account.deleteSession({ sessionId: "current" });
};
