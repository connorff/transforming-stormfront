import { NextPage } from "next";
import { Container, Grid, Image, Spacer, Text } from "@nextui-org/react";

const About: NextPage = () => {
  return (
    <Grid.Container justify="center" css={{ mt: "$5" }}>
      <Grid xs={10} sm={4}>
        <Image src="./condemnation.jpg" alt="Default Image" objectFit="cover" />
      </Grid>
      <Grid xs={10} css={{ mt: "$4" }}>
        <Container>
          <Text h1 size={30}>
            Transforming Stormfront
          </Text>
          <Text h2 size={20}>
            Connor Fogarty
          </Text>
          <Spacer y={0.5} />
          <Text>
            <Text i>Transforming Stormfront</Text> is heavily influenced by the
            <Text i>Speaking Volumes: Transforming Hate</Text> exhibit in which
            artists transformed White Supremacist texts into art. The piece
            takes an interactive approach to the process of transformation,
            allowing viewers to input text of their own creation or from
            existing literary works and displays the text as a collage of quotes
            cut and pasted from Stormfront, a White Supremacist forum.
            Stormfront was created by Don Black, a former Ku Klux Klan leader,
            and is generally regarded as the first major racial hate website.
            Members of the site tout a laundry-list of hateful views, including
            anti-blackness, anti-semitism, islamaphobia, anti-feminism,
            homophobia, and more. Because of the increasing tensions in regards
            to racism and other important social issues today, the artist wanted
            to intercept the hateful speech from its source - those who foment
            hatred and divide. He used an existing dataset of messages posted to
            the site and created an algorithm to reconstruct any piece of text
            from parts of these hate-filled messages. The intent of the project
            is to empower viewers to transmute hate speech into uplifting and
            positive text. The interface of the piece achieves this end by
            displaying each phrase pulled from Stormfront as a piece of paper
            cut from a book, symbolizing the power held by the viewer to
            digitally rip the words from the mouths of bigots and transform them
            into something powerful.
          </Text>
        </Container>
      </Grid>
    </Grid.Container>
  );
};

export default About;
