import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import { Box, Button } from "@mui/material";

const Result = () => {
  const cardCtx = useContext(CardContext);
  const { currentPoint, selectedVerbs, tryAgain } = cardCtx;

  return (
    <React.Fragment>
      <Box>Result: {currentPoint + "/" + selectedVerbs.length}</Box>
      <Button onClick={tryAgain}>Try again</Button>
    </React.Fragment>
  );
};

export default Result;
