import { Button, Grid, Spacer, Textarea, useInput } from "@nextui-org/react";
import type { NextPage } from "next";
import { useState } from "react";
import Paper from "../components/Paper";
import { findQuotes } from "../utils/api";
import { Quote } from "./api/generate";

const Home: NextPage = () => {
  const { value: message, bindings } = useInput("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    const res = await findQuotes(message);
    setQuotes(res);
    setLoading(false);
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid sm={1} />
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
      <Grid xs={12} sm={5}>
        <Paper quotes={quotes} loading={loading} />
      </Grid>
      <Grid sm={1} />
    </Grid.Container>
  );
};

export default Home;
