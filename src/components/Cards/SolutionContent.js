import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import CardContext from "../../store/card-context";
import Solution from "./Solution";

const SolutionContent = () => {
  const cardCtx = useContext(CardContext);
  const { selectedVerbs, currentVerbIndex, verbForm, nextVerb, isChecked } =
    cardCtx;
  const currentVerb = selectedVerbs[currentVerbIndex];

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     const solutionElement = document.getElementById("solution");
  //     if (solutionElement) {
  //       solutionElement.classList.add(styles["show-solution"]);
  //     }
  //   }, 10);

  //   return () => {
  //     clearTimeout(delay);
  //   };
  // }, [isChecked]);

  return (
    <Box id="solution">
      <Solution
        v1={currentVerb.v1}
        simplePast={currentVerb.simplePast}
        pastParticiple={currentVerb.pastParticiple}
        verbForm={verbForm}
      />
      <Button
        variant="contained"
        onClick={nextVerb}
        style={{
          margin: "2rem 0",
        }}
      >
        {currentVerbIndex === selectedVerbs.length - 1 ? "Finish" : "Next"}
      </Button>
    </Box>
  );
};

export default SolutionContent;
