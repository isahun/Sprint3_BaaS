import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mmsdwqgkozblneldbbqi.supabase.co",
  "sb_publishable_P_TbrkoU_FinCpbBkI4V7A_5o836iDx",
);

//login function
export const loginSb = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
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
            títol: "Nova tasca", 
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