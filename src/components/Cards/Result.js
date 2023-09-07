import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import { Box, Button, Typography } from "@mui/material";

const Result = () => {
  const cardCtx = useContext(CardContext);
  const { currentPoint, selectedVerbs, tryAgain } = cardCtx;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <Typography variant="h3">
          Result: {currentPoint + "/" + selectedVerbs.length}
        </Typography>
      </Box>
      <Button variant="contained" onClick={tryAgain}>
        Try again
      </Button>
    </Box>
  );
};

export default Result;
