import React from "react";
import SettingsForm from "../components/SettingsForm/SettingsForm";
import { Box } from "@mui/material";

const SettingsPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "3rem 2rem" }}
    >
      <SettingsForm />
    </Box>
  );
};

export default SettingsPage;
