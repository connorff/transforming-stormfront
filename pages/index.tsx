import {
  Button,
  Grid,
  Spacer,
  Textarea,
  Text,
  useInput,
  Radio,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Paper from "../components/Paper";
import { fetchExample, findQuotes } from "../utils/api";
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

  const showExample = async (example: string | number) => {
    const res = await fetchExample(example as string);
    setQuotes(res);
  };

  return (
    <Grid.Container gap={2} justify="center" css={{ mt: "$1" }}>
      <Head>
        <title>Transforming Stormfront</title>
      </Head>
      <Grid xs={12} justify="center">
        <Button size="lg" style={{ backgroundColor: "#FDEFD8", color: "#BD7D17" }}>Content Warning: quotes contain racism, slurs, and general hate</Button>
      </Grid>
      <Grid sm={1} />
      <Grid xs={12} sm={4} direction="column">
        <Textarea
          placeholder="Type your message here"
          style={{ minHeight: "25vh" }}
          size="lg"
          {...bindings}
        />
        <Spacer y={0.5} />
        <Button
          style={{ maxWidth: "5em", backgroundColor: "#2972F5" }}
          size="sm"
          onClick={fetchResults}
        >
          Submit
        </Button>
        <Spacer y={1} />
        <Text>Or try an example:</Text>
        <Radio.Group onChange={showExample}>
          <Radio value="ceremony" size="sm">
            Ceremony<Radio.Description>Leslie Marmon Silko</Radio.Description>
          </Radio>
          <Radio value="hill-we-climb" size="sm">
            The Hill We Climb<Radio.Description>Amanda Gorman</Radio.Description>
          </Radio>
          <Radio value="homegoing" size="sm">
            Homegoing<Radio.Description>Yaa Gyasi</Radio.Description>
          </Radio>
          <Radio value="things-fall-apart" size="sm">
            Things Fall Apart<Radio.Description>Chinua Achebe</Radio.Description>
          </Radio>
        </Radio.Group>
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
