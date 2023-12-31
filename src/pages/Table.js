import React from "react";
import CollapsibleTable from "../components/Table/CollapsibleTable";
import SearchBar from "../components/Table/SearchBar";
import { Box } from "@mui/material";
import SearchProvider from "../store/SearchProvider";

const TablePage = () => {
  return (
    <SearchProvider>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: 580,
            lg: 700,
          },
          margin: "3rem auto ",
          boxShadow: 12,
          borderRadius: "1rem",
        }}
      >
        <SearchBar />
        <CollapsibleTable />
      </Box>
    </SearchProvider>
  );
};

export default TablePage;
