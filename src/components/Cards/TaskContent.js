import { Box, TextField } from "@mui/material";
import React from "react";
import Task from "./Task";
import Countdown from "./Countdown";
import AnswerField from "./AnswerField";

const TaskContent = () => {
  return (
    <>
      <Box style={{ position: "relative" }}>
        <Task />
        <Countdown />
        <AnswerField />
      </Box>
    </>
  );
};

export default TaskContent;
