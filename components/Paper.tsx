import { Quote } from "../pages/api/generate";
import styles from "../styles/Paper.module.css";
import CutQuote from "./CutQuote";

type PaperProps = {
  quotes: Quote[];
};

const Paper: React.FC<PaperProps> = ({ quotes }) => {
  return (
    <div className={styles.notepad}>
      <div className={styles.top}></div>
      <div className={styles.paper}>
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
};

export default Paper;
