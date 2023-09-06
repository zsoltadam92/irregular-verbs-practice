import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import CardContext from "../../store/card-context";

const Task = () => {
  const cardCtx = useContext(CardContext);
  const { selectedVerbs, currentVerbIndex } = cardCtx;
  const currentVerb = selectedVerbs[currentVerbIndex];

  return (
    <Box style={{ paddingTop: "30px" }}>
      <Typography>{currentVerb.v1}</Typography>
    </Box>
  );
};

export default Task;
