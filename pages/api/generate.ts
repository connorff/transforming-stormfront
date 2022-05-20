import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

type Quote = {
  substring: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[]>
) {
  // fetch list of words from message
  const message: string = req.body["message"];
  const words = message
    .split(" ")
    .filter((str) => str.replace(/\s/g, "") !== "");

  const quotes: Quote[] = [];

  // starting with the largest possible message (every word joined)
  // search for substrings of quotes with the message
  let end = words.length;
  while (end !== 0) {
    for (let i = 0; i < end; i++) {
      let mess = words.slice(i, end).join(" ");
  
      const fetchedQuotes = await supabase
        .from("quotes")
        .select("message")
        .like("message", `% ${mess} %`);
  
      // quote exist with matching substring
      if (fetchedQuotes.data?.length) {
        const quote = fetchedQuotes.data[0];
  
        quotes.push({
          message: quote,
          substring: mess,
        });
  
        end = i;
      }
      // reached end without finding matching substring
      else if (i === end - 1) {
        quotes.push({
          substring: words[i],
        });
  
        end = i;
      }
    }
  }

  res.status(200).json(quotes);
}
