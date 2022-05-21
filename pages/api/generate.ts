import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

type Quote = {
  substring: string;
  message?: string;
};

/** maximum number of words searched for */
const MAX_PHRASE_LENGTH = 3;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[]>
) {
  // fetch list of words from message
  const message: string = req.body.data["message"];
  const words = message
    .split(" ")
    .filter((str) => str.replace(/\s/g, "") !== "");

  const quotes: Quote[] = [];

  // starting with the largest possible message (max phrase length)
  // search for substrings of quotes with the message
  for (let i = 0; i < words.length; i++) {
    for (
      let end = Math.min(i + MAX_PHRASE_LENGTH, words.length);
      end > i;
      end--
    ) {
      let mess = words.slice(i, end).join(" ");

      // remove capitalization, punctuation, and extra spaces
      mess = mess.toLowerCase();
      mess = mess.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
      mess = mess.replace(/\s{2,}/g, " ");

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

        i = end - 1;
      }
      // reached end without finding matching substring
      else if (i === end - 1) {
        quotes.push({
          substring: words[i],
        });
      }
    }
  }

  res.status(200).json(quotes);
}
