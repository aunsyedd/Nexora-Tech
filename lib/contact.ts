import { supabase } from "./supabase";

export async function submitForm(formData: any) {
  if (!supabase) {
    console.error("Supabase client is not initialized");
    return { data: null, error: "Supabase not initialized" };
  }

  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([formData]);

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err) {
    console.error("UNEXPECTED ERROR:", err);
    return { data: null, error: err };
  }
}