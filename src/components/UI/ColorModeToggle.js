import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ColorModeContext from "../../store/colorMode-context";

const ColorModeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ColorModeToggle;
