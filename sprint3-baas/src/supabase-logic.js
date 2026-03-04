import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

//login function
export const loginSb = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if(error) throw error;
  return data;
};

//add task
export const addTaskSb = async (nomTasca) => {
    const { data: {user} } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from("tasques")
    .insert([
        { 
            titol: nomTasca, 
            completada: false, 
            usuari: user.id 
        }
    ]);

    if(error) throw error;
    return data;
    };

    //get tasks
    export const getTasksSb = async () => {
        const { data: { user } } = await supabase.auth.getUser();

        const { data, error } = await supabase
            .from("tasques")
            .select("*")
            .eq("usuari", user.id) //like where filter from fb

            if(error) throw error;
            return data; //returns an array of objects
    };

    //sign out
    export const logOutSb = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }
    };