import { IconButton } from "@mui/material";
import React from "react";
import { speakHandler } from "../../../utils/helper";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const VolumeButton = (props) => {
  return (
    <IconButton
      aria-label="volume up"
      size="small"
      onClick={() => speakHandler(props.value)}
    >
      <VolumeUpIcon />
    </IconButton>
  );
};

export default VolumeButton;
