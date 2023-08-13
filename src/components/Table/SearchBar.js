import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  alpha,
  createTheme,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import CommonButton from "./../UI/common/CommonButton";
import useHandleNavigate from "../../hooks/use-navigate";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.3),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    margin: "1rem 0",
    width: "80%",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  marginRight: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const theme = createTheme();
console.log(theme);

const SearchBar = () => {
  const { handleNavigate: navigateToHome } = useHandleNavigate();
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          borderStartStartRadius: "1rem",
          borderStartEndRadius: "1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <CommonButton
            size="medium"
            variant="contained"
            onClick={() => navigateToHome("/")}
            sx={{
              backgroundColor: "#0250d3",
              marginBottom: { xs: " 1rem ", sm: "0" },
            }}
          >
            Back
          </CommonButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchBar;
