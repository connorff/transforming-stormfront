import axios from "axios";

export const findQuotes = async (message: string) => {
  const result = await axios.post("/api/generate", {
    data: {
      message,
    },
  });

  return result.data;
};
