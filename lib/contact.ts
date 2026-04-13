import { supabase } from "./supabase";

export async function submitForm(formData: any) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([formData]);

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return { data, error };
}