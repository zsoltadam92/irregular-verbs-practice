import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IRREGULAR_VERBS from "../../irregularVerbs";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { speakHandler } from "../../utils/helper";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { verb, sx } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={sx}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="volume up"
            size="small"
            onClick={() => speakHandler(verb.v1)}
          >
            <VolumeUpIcon />
          </IconButton>
          {verb.v1}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="volume up"
            size="small"
            onClick={() => speakHandler(verb.simplePast)}
          >
            <VolumeUpIcon />
          </IconButton>
          {verb.simplePast}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="volume up"
            size="small"
            onClick={() => speakHandler(verb.pastParticiple)}
          >
            <VolumeUpIcon />
          </IconButton>
          {verb.pastParticiple}
        </TableCell>
      </TableRow>
      <TableRow>
        {/* <TableCell /> */}
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Hungarian meaning:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {verb.v1Hu}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  // const verbs = IRREGULAR_VERBS

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "60%", margin: "3rem auto", maxHeight: 500 }}
    >
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>v1</TableCell>
            <TableCell>v2</TableCell>
            <TableCell>v3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {IRREGULAR_VERBS.map((verb, index) => (
            <Row
              key={verb.v1}
              verb={verb}
              // sx={{
              //   backgroundColor: index % 2 === 0 ? "#ccc" : "",
              // }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
