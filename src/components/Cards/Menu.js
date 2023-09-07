import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const cardCtx = useContext(CardContext);

  const navigate = useNavigate();
  const backNavigateHandler = () => {
    cardCtx.back();
    navigate("/settings");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem auto 0",
        width: {
          xs: "90%",
          sm: 400,
          lg: 500,
        },
      }}
    >
      <Button size="medium" variant="contained" onClick={backNavigateHandler}>
        Settings
      </Button>
    </Box>
  );
};

export default Menu;
