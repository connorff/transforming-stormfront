import { Button, Grid, Spacer, Textarea, useInput } from "@nextui-org/react";
import type { NextPage } from "next";
import { useState } from "react";
import Paper from "../components/Paper";
import { findQuotes } from "../utils/api";
import { Quote } from "./api/generate";

const Home: NextPage = () => {
  const { value: message, bindings } = useInput("");
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchResults = async () => {
    const res = await findQuotes(message);
    setQuotes(res);
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4} direction="column">
        <Textarea
          placeholder="Type your message here"
          style={{ minHeight: "25vh" }}
          size="lg"
          {...bindings}
        />
        <Spacer y={0.5} />
        <Button style={{ maxWidth: "5em" }} size="sm" onClick={fetchResults}>
          Submit
        </Button>
      </Grid>
      <Grid sm={1} />
      <Grid xs={12} sm={6}>
        <Paper quotes={quotes} />
      </Grid>
      <Grid sm={1} />
    </Grid.Container>
  );
};

export default Home;
