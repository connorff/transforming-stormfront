import { Tooltip } from "@nextui-org/react";
import { Quote } from "../pages/api/generate";
import HighlightedQuote from "./HighlightedQuote";

const MAX_ROTATION = 2.5;

type CutQuoteProps = {
  quote: Quote;
};

const CutQuote: React.FC<CutQuoteProps> = ({ quote }) => {
  const rotation = MAX_ROTATION - Math.random() * MAX_ROTATION * 2;

  return (
    <Tooltip
      style={{ display: "inline-block", padding: "0 2px" }}
      content={<HighlightedQuote quote={quote} />}
      placement="bottom"
      offset={20}
    >
      <span
        style={{
          transform: `rotate(${rotation}deg)`,
          backgroundColor: "#fcfcfc",
          boxShadow: "0 0 5px #9c9c9c",
          transformOrigin: "0 0",
          display: "inline-block",
        }}
      >
        {quote.original}
      </span>
    </Tooltip>
  );
};

export default CutQuote;
