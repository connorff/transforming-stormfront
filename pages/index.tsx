import { Button, Grid, Spacer, Textarea, useInput } from "@nextui-org/react";
import type { NextPage } from "next";
import { findQuotes } from "../utils/api";

const Home: NextPage = () => {
  const { value: message, bindings } = useInput("");

  const fetchResults = async () => {
    const res = await findQuotes(message);
    console.log(res);
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4} direction="column">
        <Textarea
          placeholder="Type your message here"
          style={{ minHeight: "25vh" }}
          {...bindings}
        />
        <Spacer y={0.5} />
        <Button style={{ maxWidth: "5em" }} size="sm" onClick={fetchResults}>
          Submit
        </Button>
      </Grid>
      <Grid xs={12} sm={8}></Grid>
    </Grid.Container>
  );
};

export default Home;
