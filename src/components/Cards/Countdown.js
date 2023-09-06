import { Box } from "@mui/material";
import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CardContext from "../../store/card-context";

const Countdown = () => {
  const cardCtx = useContext(CardContext);
  const { isPlaying, key, remainingTime, completeCountdown } = cardCtx;

  return (
    <Box style={{ position: "absolute", top: 25, right: 10 }}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={remainingTime}
        initialRemainingTime={remainingTime}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[30, 15, 5, 0]}
        size={40}
        strokeWidth={5}
        isSmoothColorTransition={false}
        key={key}
        onComplete={completeCountdown}
      >
        {({ remainingTime }) => <p>{remainingTime}</p>}
      </CountdownCircleTimer>
    </Box>
  );
};

export default Countdown;
