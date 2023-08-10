import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box textAlign="center" height="100vh" mt={2}>
      <Box>
        <Typography variant="h1" mb={5}>
          Oops!
        </Typography>
        <Typography variant="body1" mb={2}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="body1">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
