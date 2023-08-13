import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IRREGULAR_VERBS from "../../irregularVerbs";
import Row from "./Row";
import styled from "@emotion/styled";
import SearchContext from "../../store/search-context";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 500,
  borderEndEndRadius: "1rem",
  borderEndStartRadius: "1rem",

  "&::-webkit-scrollbar": {
    width: 12,
    height: 6,
  },

  "&::-webkit-scrollbar-thumb": {
    background:
      "linear-gradient(180deg, rgba(18,250,224,1) 11%, rgba(3,46,254,1) 67%, rgba(3,46,254,1) 100%)",
    borderRadius: 15,
  },
}));

const verbFormHeader = ["v1", "v2", "v3"].map((header) => (
  <TableCell
    key={header}
    sx={{ backgroundColor: "secondary.main", paddingLeft: 4 }}
  >
    {header}
  </TableCell>
));

const CollapsibleTable = () => {
  const searchCtx = React.useContext(SearchContext);
  const { searchTerm } = searchCtx;

  const verbs = Object.entries(IRREGULAR_VERBS);

  const filteredVerbs = verbs.filter(
    ([key, value]) =>
      value.v1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.simplePast.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.pastParticiple.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "secondary.main" }} />
            {verbFormHeader}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredVerbs.map(([key, value], index) => (
            <Row
              key={key}
              verb={value}
              sx={{
                bgcolor: index % 2 === 1 ? "secondary.main" : "",
              }}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CollapsibleTable;
