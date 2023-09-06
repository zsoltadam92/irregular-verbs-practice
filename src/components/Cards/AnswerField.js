import { TextField } from "@mui/material";
import React, { useContext, useRef } from "react";
import CardContext from "../../store/card-context";

const AnswerField = () => {
  const cardCtx = useContext(CardContext);
  const { verbInputRef, isChecked, answerState, verbForm } = cardCtx;

  return (
    <>
      <TextField
        style={{ margin: "2rem auto" }}
        type="text"
        label={verbForm === "simplePast" ? "v2" : "v3"}
        variant="outlined"
        name="answer"
        placeholder={verbForm}
        inputRef={verbInputRef}
        disabled={isChecked}
      />
    </>
  );
};

export default AnswerField;
