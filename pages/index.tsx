import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { findQuotes } from "../utils/api";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  const fetchResults = async () => {
    const res = await findQuotes(input);
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <input onChange={(ev) => setInput(ev.target.value)} />
      <button onClick={fetchResults}>Submit</button>
    </div>
  );
};

export default Home;
