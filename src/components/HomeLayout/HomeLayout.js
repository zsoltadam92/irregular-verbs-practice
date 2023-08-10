import React from "react";
import CommonButton from "../UI/common/CommonButton";
import { Box } from "@mui/material";
import useHandleNavigate from "../../hooks/use-navigate";

const HomeLayout = () => {
  const { handleNavigate: navigateToTable } = useHandleNavigate();
  const { handleNavigate: navigateToSettings } = useHandleNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
      flexDirection="column"
      gap="3rem"
    >
      <CommonButton
        sx={{ height: "4rem", padding: "0 2rem" }}
        variant="contained"
        onClick={() => navigateToTable("/table")}
      >
        Table
      </CommonButton>
      <CommonButton
        sx={{ height: "4rem", padding: "0 2rem" }}
        variant="contained"
        onClick={() => navigateToSettings("/settings")}
      >
        Practice with cards
      </CommonButton>
    </Box>
  );
};

export default HomeLayout;
