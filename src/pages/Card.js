import React, { useContext } from "react";
import Cards from "../components/Cards/Cards";
import { useNavigate } from "react-router-dom";
import CardContext from "../store/card-context";
import { Button } from "@mui/material";

const CardPage = () => {
  const cardCtx = useContext(CardContext);

  const navigate = useNavigate();
  const backNavigateHandler = () => {
    cardCtx.back();
    navigate("/settings");
  };

  return (
    <>
      <Cards />
      <Button onClick={backNavigateHandler}>Back</Button>
    </>
  );
};

export default CardPage;
