import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Collapse,
  LinearProgress,
} from "@mui/material";
import React, { useContext, useState } from "react";
import TaskContent from "./TaskContent";
import SolutionContent from "./SolutionContent";
import CardContext from "../../store/card-context";
import Result from "./Result";

const Cards = () => {
  const cardCtx = useContext(CardContext);
  const { selectedVerbs, isChecked, progress, checkVerb, isFinished } = cardCtx;

  const progressValue = (progress / selectedVerbs.length) * 100;

  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: 400,
          lg: 500,
        },
        margin: "3rem auto ",
        boxShadow: 12,
        borderRadius: "1rem",
      }}
    >
      <Card
        sx={{
          boxShadow: 6,
          borderRadius: 4,
          height: 400,
          textAlign: "center",
        }}
        component="form"
        onSubmit={checkVerb}
      >
        {!isFinished ? (
          <>
            <CardContent>
              <LinearProgress
                variant="determinate"
                color="success"
                value={progressValue}
              />

              <TaskContent />
            </CardContent>
            <CardActions>
              {!isChecked ? (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ margin: "2rem auto" }}
                >
                  Check
                </Button>
              ) : (
                <SolutionContent />
              )}
            </CardActions>{" "}
          </>
        ) : (
          <Result />
        )}
      </Card>
    </Box>
  );
};

export default Cards;
