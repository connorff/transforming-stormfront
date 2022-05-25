import { Loading, Row } from "@nextui-org/react";
import { memo } from "react";
import { Quote } from "../pages/api/generate";
import styles from "../styles/Paper.module.css";
import CutQuote from "./CutQuote";

type PaperProps = {
  quotes: Quote[];
  loading: boolean;
};

// eslint-disable-next-line react/display-name
const Paper: React.FC<PaperProps> = memo(({ quotes, loading }) => {
  return (
    <div className={styles.notepad}>
      <div className={styles.top}></div>
      <div className={styles.paper}>
        {loading && (
          <Row justify="center">
            <Loading size="xl" />
          </Row>
        )}
        {quotes.map((q, i) => {
          if (q.message) {
            return <CutQuote key={i} quote={q} />;
          } else {
            return <span style={{ padding: "0 2px" }}>{q.original}</span>;
          }
        })}
      </div>
    </div>
  );
});

export default Paper;
