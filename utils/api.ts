import axios from "axios";
import { supabase } from "./supabaseClient";

export const findQuotes = async (message: string) => {
  const result = await axios.post("/api/generate", {
    data: {
      message,
    },
  });

  return result.data;
};

export const fetchExample = async (example: string) => {
  const res = await supabase.from("examples").select("data").eq("name", example);
  return res.data![0].data;
};
