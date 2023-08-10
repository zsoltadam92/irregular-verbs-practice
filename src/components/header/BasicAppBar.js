import React from "react";
import ColorModeToggle from "../UI/ColorModeToggle";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const BasicAppBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ pt: 1.5, pb: 2 }}>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center" }}>
            Irregular verbs
          </Typography>
          <ColorModeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BasicAppBar;
