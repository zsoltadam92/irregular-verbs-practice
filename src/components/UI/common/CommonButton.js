import { Button } from "@mui/material";
import React from "react";

const CommonButton = ({
  children,
  color,
  sx,
  variant,
  size,
  disabled,
  onClick,
}) => {
  return (
    <Button
      color={color}
      sx={sx}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
