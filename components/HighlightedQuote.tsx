import { Quote } from "../pages/api/generate";

type HighlightedQuoteProps = {
  quote: Quote;
};

const HighlightedQuote: React.FC<HighlightedQuoteProps> = ({ quote }) => {
  const substrStart = quote.message?.indexOf(` ${quote.substring} `) as number;
  const highlightRange = [
    substrStart + 1,
    substrStart + quote.substring.length + 1,
  ];

  return (
    <div>
      <span>{quote.message?.substring(0, highlightRange[0])}</span>
      <span style={{ backgroundColor: "lightblue" }}>
        {quote.message?.substring(highlightRange[0], highlightRange[1])}
      </span>
      <span>{quote.message?.substring(highlightRange[1])}</span>
    </div>
  );
};

export default HighlightedQuote;
